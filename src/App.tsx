import { PageLayout } from "./components/PageLayout";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";

function App() {
  const { instance, accounts, inProgress } = useMsal();

  return (
    <PageLayout>
      <AuthenticatedTemplate>
        <p>You are signed in!</p>

        {accounts && accounts[0] && (
          <>
            <p>Name: {accounts[0].name}</p>
            <p>Username: {accounts[0].username}</p>
            <p>Environment: {accounts[0].environment}</p>
            <p>TenantId: {accounts[0].tenantId}</p>
          </>
        )}
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <p>You are not signed in! Please sign in.</p>
      </UnauthenticatedTemplate>
    </PageLayout>
  );
}

export default App;