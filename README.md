# Express-Generator

## Set up:
Initialized using:
```
> express --view=ejs myapp
> npm i
```

## Nodemon:
Additionally, I also configured Nodemon to autoupdate by:

1. Installing Nodemon:
```
npm i --save nodemon
```
2. Adding it to the start script in package.json:
```
  "scripts": {
    "start": "nodemon ./bin/www"
  },
```

## Start the app using:
```
$env:DEBUG='myapp:*'; npm start
```
