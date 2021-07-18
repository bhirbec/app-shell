# Deploy

Install firebase CLI:
https://firebase.google.com/docs/cli#install-cli-mac-linux

Build app
$ yarn --cwd app build

Copy result of the build in public folder
$ cp -r app/build/* firebase/public/

Deploy on firebase hosting
$ firebase deploy -c firebase/firebase.json --only hosting