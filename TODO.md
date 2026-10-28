# TODO

- [x] Consolidate the homepage’s original link groups into one “Links” section.
- [x] Restore a Spotify now-playing widget on the homepage.
- [x] Add a local helper to complete Spotify user authorization and produce the Worker refresh-token secret.
- [x] Verify Spotify now-playing works: the local preview returned a track during the October 26, 2026 review.
- [x] Remove the generic Spotify fallback; the listening line links directly to the playing track and stays hidden when idle or unavailable.
- [x] Link the `/now` page and move the Spotify widget off the homepage.
- [x] Add a concise `/about` “Things I’ve Worked On” page that aggregates selected public work and open-source contributions without publishing a résumé.
- [ ] Develop the unpublished code-review-in-the-age-of-agents draft around diff size, using Rithika's actual review process and examples before adding it to the archive. A development-only preview is available at `/preview/code-review-in-the-age-of-agents`.

## Site review — October 26, 2026

- [x] Make the gallery keyboard accessible: focusable photo triggers, named controls, dialog semantics, focus trapping and restoration, and descriptive image alternatives.
- [x] Add mobile side padding to the archive, article, and draft layouts (currently `px-0` below the small breakpoint).
- [x] Format publication dates in UTC or preserve calendar dates: local formatting currently shows source dates one day early in Pacific time.
- [x] Align the local heading font family (`CabinetGrotesk`) with the heading CSS (`Cabinet Grotesk`) and simplify the duplicate local/Fontshare font configuration.
- [x] Reduce gallery bandwidth: avoid automatically fetching up to five full-resolution originals when opening a photo; add image dimensions and responsive sources.
- [x] Add page descriptions, canonical URLs, social sharing metadata, and a distinct photography page title.
- [x] Improve archive accessibility: label the search field, expose filter selection with `aria-pressed`, announce result changes, and increase tag contrast.
- [x] Remove the animated background and 404 animations as part of the minimal redesign.
- [x] Replace the externally loaded Alpine gallery with a native dialog and local script.
- [ ] Correct “only non-odd entry” to “only odd entry” in the lower/upper bounds article and make the subset-index notation consistent.
- [x] Consolidate the older `/projects` page into `/about`; preserve old links with a static redirect.

- [x] Rename the homepage’s “Things” link to “Selected Work” and remove link-like underlines from noninteractive biography text.
- [x] Limit the CSS source scan to `src/` so it does not scan generated build output.
- Gallery descriptions are screen-reader alternatives only; keep visible photo captions omitted.

## Selected work refresh — October 26, 2026

- [x] Review public repositories, merged contributions, existing site materials, and the local development-setup README to choose stronger featured work.
- [x] Keep the Blink Shell OSS contribution brief; omit shrs and the personal dev setup. Give Waterloo sports-data work a fuller account under “Earlier Work,” covering infrastructure, data packages, the assistant at a high level, and JSM.
- Present Waterloo sports-data work as earlier involvement, with more space than the small shrs contributions. Keep the assistant mention high-level only, without private links or internal details.

- [x] Restore the Olympic “Peaks and Primes” article as a distinct earlier-work entry, accurately describing the data-acquisition contribution and named acknowledgement.

- [x] Trim repeated Selected Work copy: remove the generic subtitle, duplicate profile navigation, repeated JSM explanation, and repeated Olympic data-acquisition description.

- [x] Keep the homepage short; describe the current work on `/now` concretely: building multi-agent systems to help people interpret the team’s data faster and investigate root causes at a larger scale. Frame the benefits as goals; update metadata.

- [x] Keep `/now` brief and direct: short activity bullets, a minimal introduction, and no explanatory footer. Prefer this style for future updates.

- [x] Describe the investigation system and the from-scratch agent harness in two distinct bullets; avoid repeating a project and its purpose.

- Use “multi-agent systems” for the current work; avoid “teams of AI agents,” which implies the wrong structure.

- Current-work copy may mention agentic RCA, multi-agent orchestration, autonomous/parallel investigations, tool-driven analysis, human review, a from-scratch harness, and automated triage. Omit optimizer loops and evals; do not claim RAG.

- [x] Give `/now` a casual, personal tone; avoid résumé-style accomplishments and feature lists.

## Minimal redesign — October 27, 2026

- [x] Use Mechanize’s plain-document style as a reference: a plain document layout and a narrow reading column, then refine typography and spacing into a distinct visual system.
- [x] Apply the shared typography to the homepage, selected work, Now, archive, articles, draft, and 404; keep the photo grid and accessible viewer.
- [x] Remove the construction banner, decorative animation, and decorative hover effects. Keep one local typeface, concise content, and simple navigation.
- [x] Replace the rejected “rabbit hole” wording on Now with a short factual activity bullet.

- [x] Refine the minimal design with deliberate type scale, warm neutral colors, a shared spacing rhythm, quiet link underlines, and separate primary/profile navigation.

- [x] Simplify Writing to a chronological list of dates and titles; remove search, filters, tag links, post-body indexing, and associated scripts/styles.

- [x] Link NVIDIA on the homepage to its autonomous-vehicles page and add multi-agent systems to the concise interests list.

- [x] Shorten Catppuccin’s description and remove shrs from Selected Work.

- [x] Include usportspy and usportsR under Open Source; keep the broader Waterloo infrastructure and publication context under Earlier Work without repeating the package descriptions.

- [x] Condense the Waterloo infrastructure entry to two short sentences, retaining the JSM presentation link.

- [x] Restore the full JSM paper title and describe the contribution as paper co-authorship.

- [x] Link the Significance publication name to its Oxford Academic homepage.

## Writing candidates — October 27, 2026

- [x] Inventory writing available in the checkout and historical site sources. The code-review draft is substantive; the migration plan lists titles, while older project pages are short descriptions rather than essays.
- [ ] Locate the original local posts listed in `blog-migration.md`. macOS currently blocks access to `~/Documents/notes`, including an elevated filename-only lookup.
- [ ] Review the original scraping pieces as potential first migrations: “Data Scraping with GitHub Actions,” “Leveling Up: Web Scraping with Firefox Developer Tools,” and “Straight from The Source.” Choose based on the actual text, not titles alone.
- [ ] Tighten the code-review draft around the reviewer-capacity argument and add the user’s concrete review process/examples before publication.
- Potential new writing: practical lessons from coordinating agents, using personal tooling examples. Keep work details high-level and omit evals as previously requested.

## Listening-line trial — October 27, 2026

- [x] Remove Now from navigation and forward `/now` to the homepage.
- [x] Add a small text-only listening line below the homepage profile links, without album art, icons, loading copy, or idle/error messages. Show it only for an actively playing track.

- [x] Use the brief homepage line: “Interests: combinatorics, graph theory, mathematical optimization, dev efficiency, multi-agent systems”. The tooling interest is motivated by speed and workflow efficiency; do not frame it as an interest in tools for their own sake or narrow mathematical optimization to algorithmic efficiency. Align metadata.

- [x] Widen only the homepage to fit the concise interests line on desktop; retain normal wrapping on mobile and the narrower reading width elsewhere.

- [x] Replace the homepage “Interests:” sentence with small hashtag tags, light outlines, and natural wrapping. Use “collaborative agent systems” to emphasize system building.

- [x] Add systems-programming and performance-optimization tags alongside the existing interests; spell out dev-efficiency. Allow the expanded set to wrap naturally.

- [x] Lead tags with systems-programming and performance-optimization, followed by collaborative-agent-systems, dev-efficiency, combinatorics, graph-theory, and mathematical-optimization. Omit the standalone C++ tag to keep agent systems equally represented.

- [x] Use “System Software Engineer” as the homepage title and in profile metadata.

- [x] Move Selected Work to `/work`; point navigation there and redirect `/about` and `/projects` directly to `/work`.

- [x] Emphasize data acquisition and standardization in the U SPORTS entry after inspecting the public Python loaders and shared upstream collection/backfill/update pipeline. Preserve the distinct Python/R contribution credits.

- [x] State the user’s role directly in the U SPORTS entry: led data acquisition across sports and seasons.

- [x] Describe the Peaks and Primes data-acquisition contribution directly; omit the named-acknowledgement wording.

- [x] Keep the Peaks and Primes credit factual: “Provided data-acquisition support,” without “extensive.”

- [x] Use “Led data acquisition.” for the U SPORTS packages; keep Peaks and Primes as “Provided data-acquisition support.”

- [x] Preserve the previous homepage layout, heading weight, inline role/education, and navigation spacing. Keep tags readable at 12px; scale the surrounding homepage type up by 12.5% (18px description/navigation, 25.2px name, 14.4px profile/listening links) without changing the layout.

- [x] Center gallery navigation/close icons using fixed-size SVGs and grid alignment instead of font-dependent text glyphs.

- [x] Rename `/work` and its homepage link to “Projects & Contributions”; clarify that the page covers public projects outside day-to-day work, not the user’s complete professional portfolio.

- [x] Explicitly describe Projects & Contributions as a non-exhaustive list.

- [x] Reduce the gap between homepage navigation and social links from 3.5rem to 1.5rem.

- [x] Temporarily replace the Writing index with a brief note about deciding which older pieces to keep and what to write next. Preserve existing article sources and URLs while the user decides.

- [x] Add a friendly invitation and links to the older bounds and ECDSA pieces beneath the Writing note.

## Writing edits — October 27, 2026

- [x] Remove emojis from the bounds and ECDSA posts, preserving the conversational tone. Keep proof changes separate.
- [x] Correct the ECDSA argument: distinguish field/subgroup parameters and hash conversion, remove the three-signature guarantee, derive equal/opposite nonce recovery with invertibility conditions, and verify candidates against the public key.

- [x] Restore the ECDSA post’s original voice and structure after an overly broad rewrite; limit edits to mathematical mistakes and the minimum derivation needed to replace the incorrect argument. Do not rewrite the user’s prose during correctness edits.

- [x] End the ECDSA post with a concise candidate count in the original conversational tone: three pairs, at most six candidates from testing equal/opposite nonces, and at most one matching the public key.
