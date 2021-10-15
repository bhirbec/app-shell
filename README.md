# Running the App locally

Create `.env` file in `app` directory and add the Firebase configuration:

```
REACT_APP_API_KEY=""
REACT_APP_AUTH_DOMAIN=""
REACT_APP_DATABASE_URL=""
REACT_APP_PROJECT_ID=""
REACT_APP_STORAGE_BUCKET=""
REACT_APP_MESSAGING_SENDER_ID=""
REACT_APP_APP_ID=""
REACT_APP_MEASUREMENT_ID=""
```

Run the app locally with:
```
$ cd app
$ yarn install # only once
$ yarn start
```

# Running the Home page locally

```
$ cd home
$ yarn install # only once
$ yarn start
```

# Hosting

## Setup

Install [Firebase CLI](https://firebase.google.com/docs/cli) 
```shell
npm install -g firebase-tools
```

And log in to Firebase
```shell
firebase login
```

Initialize Firebase Hosting in a new `hosting` folder
```
$ mkdir -p hosting
$ cd hosting
$ firebase init
```

Override firebase.json with:
```
{
  "functions": {
    "source": "functions",
    "predeploy": [
      "npm --prefix \"$RESOURCE_DIR\" run lint"
    ]
  },
  "database": {
    "rules": "database.rules.json"
  },
  "hosting": {
    "public": "public",
    "rewrites": [{
      "source": "/",
      "destination": "/index.html"
    },{
      "source": "**",
      "destination": "/app.html"
    }],
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  }
}
```

## Deploy

Install Firebase CLI:
https://firebase.google.com/docs/cli#install-cli-mac-linux

Run deploy script
$ ./deploy.sh