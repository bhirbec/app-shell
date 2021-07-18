# Deploy

Install firebase CLI:
https://firebase.google.com/docs/cli#install-cli-mac-linux

Build app
$ yarn --cwd app build

Copy result of the build in public folder
$ rsync -rv app/build/* firebase/public/

Build home
$ yarn --cwd home build

Copy result of the build in public folder
$ rsync -rv home/public/* firebase/public/

Deploy on firebase hosting
$ firebase deploy -c firebase/firebase.json --only hosting

# clean

find ./firebase/public/* -print0 | xargs -0 rm -rf --