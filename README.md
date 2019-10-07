To reproduce:
- Make sure you have a somewhat recent version of node installed.
- Run `node flood-server.js`.
- (In a separate terminal), run `rm -rf fresh-new-dir && $PATH_TO_CHROME_BINARY --user-data-dir=fresh-new-dir --no-sandbox --no-experiments --no-first-run --noerrdialogs http://localhost:7000`. E.g. `google-chrome-beta` counts as `PATH_TO_CHROME_BINARY` if you're on linux.  
