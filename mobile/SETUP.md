# Swaraj World Mobile App Setup Guide

## Overview

This guide will help you set up and run the Swaraj World mobile application on Android and iOS devices. The mobile app is built with React Native and provides a seamless shopping experience optimized for mobile devices.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or newer)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- For iOS development (Mac only):
  - Xcode
  - CocoaPods
- For Android development:
  - Android Studio
  - Android SDK
  - Java Development Kit (JDK)

## Installation

1. Navigate to the mobile directory:
   ```
   cd swaraj-world/mobile
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. For iOS (Mac only), install CocoaPods dependencies:
   ```
   cd ios && pod install && cd ..
   ```

## Running the App

### Android

1. Make sure you have an Android emulator running or a physical device connected
2. Run the following command:
   ```
   npm run android
   # or
   yarn android
   ```

### iOS (Mac only)

1. Make sure you have an iOS simulator running or a physical device connected
2. Run the following command:
   ```
   npm run ios
   # or
   yarn ios
   ```

### Start Metro Bundler separately (optional)

If you want to start the Metro bundler separately:

```
npm start
# or
yarn start
```

## Project Structure

```
mobile/
├── src/
│   ├── context/           # React Context providers
│   │   └── CartContext.js # Shopping cart state management
│   ├── screens/           # App screens
│   │   ├── Cart.js        # Shopping cart screen
│   │   ├── ProductDetail.js # Product details screen
│   │   └── ProductList.js # Product listing screen
├── App.js                 # Main application component
├── index.js               # Entry point
└── app.json               # App configuration
```

## Building for Production

### Android

```
cd android
./gradlew assembleRelease
```

The APK will be generated at `android/app/build/outputs/apk/release/app-release.apk`

### iOS

Build the app using Xcode by selecting the "Product > Archive" option.

## Troubleshooting

- If you encounter build issues, try cleaning the project:
  ```
  npm start -- --reset-cache
  cd android && ./gradlew clean
  ```

- For iOS issues, try cleaning the build folder in Xcode: "Product > Clean Build Folder"

## Features

- Cross-platform support for Android and iOS
- User-friendly interface with bottom tab navigation
- Product browsing by categories
- Product search functionality
- Product details with images and descriptions
- Shopping cart management
- User profile and account settings