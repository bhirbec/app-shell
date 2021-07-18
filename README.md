# Deploy

Install firebase CLI:
https://firebase.google.com/docs/cli#install-cli-mac-linux

Clean up folder public folder
$ find ./hosting/public/* -print0 | xargs -0 rm -rf --

Build app
$ yarn --cwd app build

Copy result of the build in public folder
$ mkdir -p hosting/public
$ rsync -v app/build/index.html hosting/public/app.html
$ rsync -rv app/build/static hosting/public

Build home
$ yarn --cwd home build

Copy result of the build in public folder
$ rsync -rv home/public/* hosting/public/

Deploy on firebase hosting
$ firebase deploy -c hosting/firebase.json --only hosting

