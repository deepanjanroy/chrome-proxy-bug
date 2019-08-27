To reproduce:
- Make sure you have a somewhat recent version of node installed.
- Run `node flood-server.js`.
- (In a separate terminal), run `rm -rf fresh-new-dir && google-chrome-beta --user-data-dir=fresh-new-dir --no-sandbox --no-experiments --no-first-run --noerrdialogs http://localhost:7000`
