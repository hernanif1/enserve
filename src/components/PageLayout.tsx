import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props: { children: JSX.Element | JSX.Element[] }) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
            <h2>Welcome </h2>
            <br />
            {isAuthenticated ? <SignOutButton /> : <SignInButton />}
            <br />
            <br />
            {props.children}
        </>
    );
};