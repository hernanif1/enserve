export const msalConfig = {
    auth: {
        clientId: "44c6342a-ae86-438b-8b91-2f180244b16b",
        authority: "https://login.microsoftonline.com/3d4d17ea-1ae4-4705-947e-51369c5a5f79", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
        redirectUri: import.meta.env.VITE_APP_URL,
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
    scopes: ["User.Read"]
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
    graphMeEndpoint: "Enter_the_Graph_Endpoint_Here/v1.0/me"
};