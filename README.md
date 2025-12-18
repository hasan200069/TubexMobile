# Tubex Dubai Mobile App

A modern, static mobile application built with Expo and React Native for Tubex Dubai - an IT services company based in Dubai. This app promotes IT services and allows customers to submit purchase inquiries.

## Features

- **Splash Screen** - Branded welcome screen with company logo
- **Home Screen** - Hero section with company introduction and quick navigation
- **Services Screen** - Display of 5 core IT services with beautiful card UI
- **Service Detail Screen** - Detailed information about each service
- **Contact Screen** - Inquiry form for service requests
- **About Screen** - Company overview and mission statement

## Technology Stack

- **Expo** ~51.0.0
- **React Native** 0.74.5
- **React Navigation** - For navigation between screens
- **Expo Linear Gradient** - For gradient backgrounds
- **Expo Vector Icons** - For icons

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher recommended)
- **npm** or **yarn**
- **Expo CLI** (will be installed with dependencies)
- For iOS development: **Xcode** (macOS only)
- For Android development: **Android Studio**

## Installation

1. **Install dependencies:**

```bash
npm install
```

or

```bash
yarn install
```

2. **Start the development server:**

```bash
npm start
```

or

```bash
yarn start
```

This will open the Expo DevTools. You can then:
- Press `a` to open on Android emulator
- Press `i` to open on iOS simulator (macOS only)
- Scan the QR code with Expo Go app on your physical device

## Running on Physical Devices

### iOS
1. Install **Expo Go** from the App Store
2. Scan the QR code from the terminal/Expo DevTools
3. The app will load on your device

### Android
1. Install **Expo Go** from Google Play Store
2. Scan the QR code from the terminal/Expo DevTools
3. The app will load on your device

## Building for Production

### Android (APK/AAB)

1. **Install EAS CLI globally:**

```bash
npm install -g eas-cli
```

2. **Login to Expo:**

```bash
eas login
```

3. **Configure EAS Build:**

```bash
eas build:configure
```

4. **Build APK (for testing):**

```bash
eas build --platform android --profile preview
```

5. **Build AAB (for Google Play Store):**

```bash
eas build --platform android --profile production
```

6. **Build locally (optional):**

```bash
expo prebuild
expo run:android
```

### iOS (App Store)

1. **Build for iOS:**

```bash
eas build --platform ios --profile production
```

2. **Build locally (requires macOS with Xcode):**

```bash
expo prebuild
expo run:ios
```

## Project Structure

```
TubexMobile/
├── assets/
│   └── logo.png          # Company logo
├── screens/
│   ├── SplashScreen.js   # Splash screen component
│   ├── HomeScreen.js     # Home screen with hero section
│   ├── ServicesScreen.js # Services listing screen
│   ├── ServiceDetailScreen.js # Individual service details
│   ├── ContactScreen.js  # Contact/inquiry form
│   └── AboutScreen.js    # About company screen
├── navigation/
│   └── AppNavigator.js   # Navigation configuration
├── App.js                # Main app entry point
├── app.json              # Expo configuration
├── package.json          # Dependencies and scripts
└── babel.config.js       # Babel configuration
```

## Key Features Explained

### Navigation
- Uses React Navigation with Bottom Tab Navigator
- Services screen has a nested stack navigator for service details
- Smooth transitions between screens

### Styling
- Modern UI with gradient backgrounds
- Dark blue/black theme (#0A1628, #1A1A2E) with white accents
- Responsive design for different screen sizes
- Shadow effects and elevation for depth

### Services Offered
1. Mobile App Development
2. Web Development
3. AI Automation
4. Blockchain Solutions
5. Cloud & DevOps

### Contact Form
- Static form UI (no backend submission)
- Form validation
- Success alert on submission
- Pre-filled service field when navigating from service detail

## Configuration

### App Identity
- **App Name:** Tubex Dubai
- **Bundle Identifier (iOS):** com.tubexdubai.app
- **Package Name (Android):** com.tubexdubai.app

### Customization
To customize the app:
- Update branding colors in individual screen StyleSheets
- Modify service information in `ServicesScreen.js` and `ServiceDetailScreen.js`
- Update company information in `AboutScreen.js`
- Replace logo in `assets/logo.png`

## Development Tips

1. **Hot Reload:** Changes to code will automatically reload in the app
2. **Debugging:** Use React Native Debugger or Chrome DevTools
3. **Styling:** All styles are defined using StyleSheet API for better performance
4. **Icons:** Using Expo Vector Icons (Ionicons) - can be changed to other icon sets

## Troubleshooting

### Common Issues

1. **EMFILE: too many open files error (macOS):**
   
   This is a common issue on macOS. The best solution is to install Watchman:
   ```bash
   brew install watchman
   ```
   
   If you don't have Homebrew, install it first:
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
   
   Alternatively, you can increase the file descriptor limit temporarily:
   ```bash
   ulimit -n 4096
   npm start
   ```

2. **Metro bundler issues:**
   ```bash
   npm start -- --clear
   ```

3. **Node modules issues:**
   ```bash
   rm -rf node_modules
   npm install
   ```

4. **Cache issues:**
   ```bash
   expo start -c
   ```

5. **iOS build issues:**
   - Ensure Xcode is properly installed
   - Run `pod install` in ios/ directory after `expo prebuild`

6. **Android build issues:**
   - Ensure Android SDK is properly configured
   - Check JAVA_HOME environment variable

## Notes

- This is a **static application** with no backend, database, or authentication
- Form submissions show alerts only (no actual data is sent)
- All content is hardcoded in the application
- Ready for future backend integration

## License

Proprietary - Tubex Dubai

## Support

For issues or questions about the app, please contact the development team.

