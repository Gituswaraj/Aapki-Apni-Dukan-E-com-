# Swaraj World Mobile App

This is the mobile application version of Swaraj World e-commerce platform, built with React Native for both Android and iOS platforms.

## Features

- Cross-platform support for Android and iOS
- Responsive UI adapted from the web version
- Bottom tab navigation for easy access to key sections
- Product browsing and category filtering
- Shopping cart functionality
- User profile and account management

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or newer)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- For iOS: Xcode (Mac only)
- For Android: Android Studio and Android SDK

## Getting Started

### Installation

1. Clone the repository (if you haven't already):
   ```
   git clone <repository-url>
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

### Running the App

#### For Android:

```
npm run android
# or
yarn android
```

#### For iOS (Mac only):

```
npm run ios
# or
yarn ios
```

#### Start Metro Bundler separately (optional):

```
npm start
# or
yarn start
```

## Project Structure

- `/android` - Android-specific code
- `/ios` - iOS-specific code
- `App.js` - Main application component
- `index.js` - Entry point for the application

## Development

### Adding New Screens

To add a new screen to the application:

1. Create a new component in the appropriate directory
2. Add the screen to the navigation stack in `App.js`

### Connecting to Backend

The mobile app is designed to connect to the same backend API as the web version. Update the API endpoints in the appropriate service files.

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

## License

This project is licensed under the same terms as the main Swaraj World application.