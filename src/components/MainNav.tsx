import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <span className="flex space-x-2 items-center">
      {isAuthenticated ? (
      <UsernameMenu />
      ): (<Button
        variant="ghost"
        className="flex items-center px-4 py-2 font-bold text-gray-700 hover:text-orange-500 gap-2 transition duration-150 ease-in-out rounded-md shadow hover:shadow-lg"
        onClick={async () => await loginWithRedirect()}
      >
        Log In
      </Button>
    )}
    </span>

  )
}

export default MainNav;