rm -rf "android/build"
rm -rf "android/app/build"
rm -rf "android/app/release"
rm -rf "android/app/src/main/assets"
mkdir "android/app/src/main/assets"
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

