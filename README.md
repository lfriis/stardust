# Project Stardust

Start by downloading the `expo-cli` application globally to your machine:

```terminal
$  sudo npm i -g expo-cli
```

Create your project with the Expo CLI:

```terminal
$  expo init stardust
```

## Available Scripts

### Install the node modules in 📁 client & 📁 server

`npm i` installs all defined node modules that are required in `/client/package.json` and `/server/package.json`.

Example for 📁 **client**:

```terminal
$  cd client
$  npm i
```

Example for 📁 **server**:

```terminal
$  cd server
$  npm i
```

### Run Expo Dev Environment

```terminal
$  cd client
$  npm start
```

This command will start the Metro Bundler and display a QR code in the terminal.

Use the command line to launch an emulator of your choice: Android, iOS, or web to preview the mobile app.

You can also scan the QR code with your mobile devices camera which will deploy your app to Expo to preview your changes on your device.

The page will reload if you make edits.\
You will also see any lint errors in the console.
