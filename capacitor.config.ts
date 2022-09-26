import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'types',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.0.194:3000',
    cleartext: true
  }
};

export default config;
