# Build iOS App for App Store

This guide will help you build your Tubex Dubai app for iOS App Store submission.

## Prerequisites

1. **Apple Developer Account** (required)
   - Sign up at: https://developer.apple.com/programs/
   - Cost: $99 USD per year
   - You need this to submit to App Store

2. **Apple ID** (free account works for some testing)

3. **EAS CLI** installed (you already have this)

4. **Expo Account** (already logged in)

## Step 1: Configure Apple Developer Credentials

EAS Build will help you set up credentials. Run:

```bash
eas build:configure
```

This will prompt you to:
- Connect your Apple Developer account
- Set up provisioning profiles
- Configure certificates

**First time setup:**
```bash
eas credentials
```

This will guide you through:
- Apple ID login
- Team selection (if part of organization)
- Automatic credential management (recommended)

## Step 2: Build for iOS App Store

### Build for App Store Submission:

```bash
npm run build:ios
```

**Or use direct command:**
```bash
eas build --platform ios --profile production
```

### Build for Testing (Internal Distribution):

```bash
npm run build:ios:preview
```

**Or use direct command:**
```bash
eas build --platform ios --profile preview
```

## Step 3: Wait for Build to Complete

- iOS builds take **15-25 minutes** (longer than Android)
- Build runs on Expo's macOS servers
- You'll get a build URL in terminal
- Check status at: https://expo.dev/accounts/[your-username]/builds

## Step 4: Download Build

Once complete:
1. Visit the build URL or go to expo.dev/builds
2. Download the `.ipa` file or `.app` file

## Step 5: Submit to App Store

### Option A: Submit via EAS Submit (Recommended)

This is the easiest way:

```bash
npm run submit:ios
```

**Or:**
```bash
eas submit --platform ios
```

This will:
- Upload your app to App Store Connect
- Handle the submission process
- Guide you through any missing information

### Option B: Submit via Xcode/Transporter

1. Download the `.ipa` file from EAS Build
2. Use **Transporter** app (from Mac App Store) or Xcode
3. Upload to App Store Connect

## Step 6: Complete App Store Connect Setup

Before submission, you need to set up your app in App Store Connect:

1. **Go to**: https://appstoreconnect.apple.com
2. **Create App**:
   - App Name: Tubex Dubai
   - Bundle ID: com.tubexdubai.app
   - SKU: (any unique identifier)
   - Primary Language: English

3. **App Information**:
   - Category: Business or Utilities
   - Age Rating: 4+
   - Privacy Policy URL (if required)

4. **Pricing and Availability**:
   - Price: Free
   - Availability: All countries (or select)

5. **App Store Listing**:
   - Screenshots (required)
   - Description
   - Keywords
   - Support URL
   - Marketing URL (optional)

## Step 7: Submit for Review

After uploading:
1. In App Store Connect, go to your app
2. Select the build you uploaded
3. Fill in all required information
4. Submit for Review

**Review Process:**
- Usually takes 24-48 hours
- Apple will review your app
- You'll get email notifications

---

## Troubleshooting

### Certificate Issues

If you get certificate errors:
```bash
eas credentials
```

Select "iOS" → "Set up new credentials" → Follow prompts

### Build Fails

Common issues:
- Missing Apple Developer account → Sign up at developer.apple.com
- Invalid bundle identifier → Check app.json
- Missing provisioning profile → Run `eas credentials`

### App Store Connect Errors

- Make sure bundle ID matches exactly
- Ensure app name is available
- Check all required fields are filled

---

## Important Notes

### Bundle Identifier
- Current: `com.tubexdubai.app`
- Must be unique
- Cannot be changed after first submission

### Version Numbers
- Current: `version: "1.0.0"` (user-facing)
- iOS: `buildNumber: "1"` (increments with each build)
- Each App Store submission needs a new build number

### Requirements for App Store
- App must comply with App Store Review Guidelines
- Privacy policy URL (if app collects data)
- App description and screenshots
- Age rating questionnaire

---

## Quick Reference

```bash
# Configure credentials
eas credentials

# Build for App Store
npm run build:ios

# Build for testing
npm run build:ios:preview

# Submit to App Store
npm run submit:ios

# Check build status
npm run build:list

# View credentials
eas credentials
```

---

## Cost Summary

- **Apple Developer Program**: $99/year (required)
- **EAS Build**: Free tier available, paid plans for more builds
- **App Store**: Free to submit

---

## Next Steps After Submission

1. Monitor App Store Connect for review status
2. Respond to any review feedback
3. Once approved, your app goes live!
4. Update version numbers for future updates

---

## Need Help?

- EAS Build Docs: https://docs.expo.dev/build/introduction/
- App Store Connect: https://appstoreconnect.apple.com
- Apple Developer: https://developer.apple.com


