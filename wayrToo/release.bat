rd /s /q "android/build"
rd /s /q "android/app/build"
rd /s /q "android/app/release"
rd /s /q "android/app/src/main/assets"
mkdir "android/app/src/main/assets"
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
