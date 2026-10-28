#!/usr/bin/env python3
"""Print a Spotify refresh-token environment value."""

import base64
import json
import os
import secrets
import sys
import urllib.error
import urllib.parse
import urllib.request


REDIRECT_URI = "https://spotify.rithikasilva.workers.dev/callback"
SCOPES = "user-read-currently-playing user-read-playback-state"
TOKEN_URL = "https://accounts.spotify.com/api/token"


def fail(message: str) -> None:
    print(f"Error: {message}", file=sys.stderr)
    raise SystemExit(1)


def load_dotenv() -> None:
    """Load simple KEY=VALUE entries from a local .env without dependencies."""
    dotenv = os.path.join(os.getcwd(), ".env")
    if not os.path.isfile(dotenv):
        return
    with open(dotenv, encoding="utf-8") as file:
        for line in file:
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, value = line.split("=", 1)
            os.environ.setdefault(key.strip(), value.strip().strip("\"'"))


def main() -> None:
    load_dotenv()
    client_id = os.environ.get("SPOTIFY_CLIENT_ID")
    client_secret = os.environ.get("SPOTIFY_CLIENT_SECRET")
    if not client_id or not client_secret:
        fail("Set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET first.")

    state = secrets.token_urlsafe(24)
    query = urllib.parse.urlencode(
        {
            "client_id": client_id,
            "response_type": "code",
            "redirect_uri": REDIRECT_URI,
            "scope": SCOPES,
            "state": state,
        }
    )
    print(f"Authorize: https://accounts.spotify.com/authorize?{query}")
    redirected_url = input("Redirect URL: ").strip()
    callback = urllib.parse.urlparse(redirected_url)
    parameters = urllib.parse.parse_qs(callback.query)

    returned_state = parameters.get("state", [None])[0]
    if returned_state is None:
        if input("No state returned. Continue? [y/N] ").strip().lower() != "y":
            fail("Authorization cancelled.")
    elif returned_state != state:
        fail("State mismatch.")
    if "error" in parameters:
        fail(f"Spotify authorization was denied: {parameters['error'][0]}")
    code = parameters.get("code", [None])[0]
    if not code:
        fail("No authorization code was present in the redirected URL.")

    basic_auth = base64.b64encode(f"{client_id}:{client_secret}".encode()).decode()
    body = urllib.parse.urlencode(
        {"grant_type": "authorization_code", "code": code, "redirect_uri": REDIRECT_URI}
    ).encode()
    request = urllib.request.Request(
        TOKEN_URL,
        data=body,
        headers={
            "Authorization": f"Basic {basic_auth}",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(request) as response:
            tokens = json.load(response)
    except urllib.error.HTTPError as error:
        fail(f"Spotify rejected the code exchange (HTTP {error.code}).")

    refresh_token = tokens.get("refresh_token")
    if not refresh_token:
        fail("Spotify did not return a refresh token. Begin authorization again.")

    print(f"SPOTIFY_REFRESH_TOKEN={refresh_token}")


if __name__ == "__main__":
    main()
