import os
import re
import sys
from datetime import datetime

def rename_images_to_timestamp_format(directory):
    pattern = re.compile(r"\d{8}_\d{6}\.(jpg|jpeg)", re.IGNORECASE)
    used_names = set()

    for filename in os.listdir(directory):
        lower = filename.lower()
        if not lower.endswith(('.jpg', '.jpeg')) or pattern.fullmatch(lower):
            continue

        old_path = os.path.join(directory, filename)

        try:
            mtime = os.path.getmtime(old_path)
        except OSError as e:
            print(f"Error reading {filename}: {e}")
            continue

        timestamp = datetime.fromtimestamp(mtime).strftime('%Y%m%d_%H%M%S')

        # Make sure filename is unique
        base_name = timestamp
        new_filename = f"{base_name}.jpg"
        i = 1
        while new_filename in used_names or os.path.exists(os.path.join(directory, new_filename)):
            new_filename = f"{base_name}_{i}.jpg"
            i += 1
        used_names.add(new_filename)

        new_path = os.path.join(directory, new_filename)
        print(f"Renaming: {filename} → {new_filename}")
        os.rename(old_path, new_path)

def main():
    if len(sys.argv) > 2:
        print("Usage: python rename_images.py [directory]")
        sys.exit(1)

    target_dir = sys.argv[1] if len(sys.argv) == 2 else os.getcwd()
    if not os.path.isdir(target_dir):
        print(f"Error: '{target_dir}' is not a directory.")
        sys.exit(1)

    rename_images_to_timestamp_format(target_dir)

if __name__ == "__main__":
    main()
