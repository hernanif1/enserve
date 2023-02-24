import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";


/**
 * Renders a button which, when selected, will open a popup for login
 */
export const SignInButton = () => {
    const { instance } = useMsal();

    const handleLogin = (loginType: "redirect") => {
        if (loginType === "redirect") {
            instance.loginRedirect(loginRequest).catch(e => {
                console.log(e);
            });
        }
    }
    return (
        <button onClick={() => handleLogin("redirect")}>Sign in using redirect</button>
    );
}