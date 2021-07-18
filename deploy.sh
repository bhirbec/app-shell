find ./hosting/public/* -print0 | xargs -0 rm -rf --

# Build app and home
yarn --cwd app build
yarn --cwd home build

# Copy result of the builds in public folder
mkdir -p hosting/public
rsync -v app/build/index.html hosting/public/app.html
rsync -rv app/build/static hosting/public
rsync -rv home/public/* hosting/public/

# Deploy on firebase hosting
firebase deploy -c hosting/firebase.json --only hosting