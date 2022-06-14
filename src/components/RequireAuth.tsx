import { Navigate, useLocation } from "react-router-dom";
import { useSelector }              from "react-redux";

function RequireAuth({ children }: { children: JSX.Element }) {
  let user = useSelector((state: any) => state.user.value)
  let location = useLocation();

  if (!user) {
    // https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src%2FApp.tsx
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
}

export default RequireAuth;