import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const UsernameMenu = () => {
    const {user, logout} = useAuth0();
  return(
    <DropdownMenu>
         <DropdownMenuTrigger className="flex items-center px-4 py-2 font-bold text-gray-700 hover:text-orange-500 gap-2 transition duration-150 ease-in-out rounded-md shadow hover:shadow-lg">
      <CircleUserRound className="text-orange-500"/>
      {user?.email}
    </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white shadow-lg rounded-lg mt-2 border border-gray-100">
        <DropdownMenuItem>
          <Link to="/user-profile"  className="block px-4 py-2 font-bold text-gray-700 hover:text-orange-500 transition duration-150 ease-in-out">
            User Profile
          </Link>
        </DropdownMenuItem>
            <Separator className="border-t border-gray-200"/>
            <DropdownMenuItem>
                <Button onClick={() => logout()}
                className="flex w-full items-center justify-center px-4 py-2 font-bold text-white bg-orange-500 hover:bg-orange-600 transition duration-150 ease-in-out rounded-md shadow"
                >
                    Log Out
                </Button>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu;