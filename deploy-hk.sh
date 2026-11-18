#!/bin/bash
# Sync the built site to the Hong Kong server (mainland-China mirror).
set -e
cd "$(dirname "$0")"
git ls-files -z index.html fonts img | rsync -az --delete-after --from0 --files-from=- \
  -e ssh ./ bellotablanca:/var/www/bellotablanca/
echo "Synced to Hong Kong server."
