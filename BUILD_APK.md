# Build APK for Tubex Dubai App

This guide will help you build an APK file for your Tubex Dubai app.

## Prerequisites

1. **Node.js** installed (you already have this)
2. **Expo account** (free account works fine)
3. **EAS CLI** (we'll install this)

## Step 1: Install EAS CLI

Install EAS CLI globally on your computer:

```bash
npm install -g eas-cli
```

Verify installation:
```bash
eas --version
```

## Step 2: Login to Expo

You need to login to your Expo account:

```bash
eas login
```

If you don't have an Expo account, it will prompt you to create one (it's free).

## Step 3: Configure EAS Build (Already Done)

The `eas.json` file is already configured with:
- **preview** profile: Builds APK for testing
- **production** profile: Builds APK for release

## Step 4: Build APK

### Option A: Build APK for Testing (Recommended First)

This builds an APK that you can install directly on Android devices:

```bash
eas build --platform android --profile preview
```

### Option B: Build Production APK

For production/release APK:

```bash
eas build --platform android --profile production
```

## Step 5: Wait for Build to Complete

- The build will run on Expo's servers (takes 10-20 minutes)
- You'll see a build URL in the terminal
- You can check build status at: https://expo.dev/accounts/[your-username]/builds

## Step 6: Download APK

Once the build completes:

1. Visit the build URL shown in terminal, OR
2. Go to https://expo.dev/accounts/[your-username]/builds
3. Click on your build
4. Download the APK file

## Step 7: Install APK on Android Device

1. Transfer the APK file to your Android device
2. On your device, enable "Install from Unknown Sources" in Settings
3. Tap the APK file to install
4. Follow the installation prompts

---

## Alternative: Build Locally (Advanced)

If you want to build locally instead of using Expo's servers:

1. **Prebuild native projects:**
   ```bash
   npx expo prebuild
   ```

2. **Build APK locally (requires Android Studio):**
   ```bash
   cd android
   ./gradlew assembleRelease
   ```

   The APK will be at: `android/app/build/outputs/apk/release/app-release.apk`

---

## Troubleshooting

### Build Fails

- Check the build logs at expo.dev
- Ensure all dependencies are correctly installed
- Verify app.json configuration

### APK Installation Issues

- Enable "Install from Unknown Sources" on Android device
- Check if APK is for correct architecture (arm64-v8a, armeabi-v7a, etc.)

### Want AAB Instead of APK?

For Google Play Store, you need AAB (Android App Bundle):

Update `eas.json`:
```json
"production": {
  "android": {
    "buildType": "aab"
  }
}
```

Then build:
```bash
eas build --platform android --profile production
```

---

## Quick Reference

```bash
# Login
eas login

# Build APK for testing
eas build --platform android --profile preview

# Build APK for production
eas build --platform android --profile production

# Check build status
eas build:list

# View build details
eas build:view [build-id]
```

---

## Notes

- First build may take longer (15-20 minutes)
- Subsequent builds are usually faster (10-15 minutes)
- Free Expo accounts have build limits (check expo.dev for current limits)
- APK files are typically 20-50 MB in size

