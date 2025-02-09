import { PublicClientApplication, LogLevel } from '@azure/msal-browser';

export const MSALConfig = {
  auth: {
    clientId: 'your-client-id', // Replace with actual Client ID
    authority: 'https://login.microsoftonline.com/your-tenant-id', // Replace with actual Tenant ID
    redirectUri: 'http://localhost:4200'
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: false
  },
  system: {
    loggerOptions: {
      loggerCallback: (level: LogLevel, message: string) => {
        console.log(message);
      },
      logLevel: LogLevel.Info,
      piiLoggingEnabled: false
    }
  }
};

export const MSALInstanceFactory = () => new PublicClientApplication(MSALConfig);
