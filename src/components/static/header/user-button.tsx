// import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ArrowRightFromLine, Info, Settings, UserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LoginDialog from "@/components/auth/login-dialog";
import { useAuth } from "@/context/authContext";
import { useEffect, useState } from "react";
import { UserData } from "../../../../actions";

const UserButton = () => {
  const [user, setUser] = useState(null);

  const { accessToken } = useAuth();

  useEffect(() => {
    if (accessToken) {
      UserData(accessToken).then((response) => {
        setUser(response);
      });
    } else {
      console.log(" no access token");
    }
  }, [accessToken]);

  if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none border-none flex items-center gap-2 text-sm">
          <UserRound size={16} />
          Account
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-52 px-2 pb-6">
          <DropdownMenuLabel>
            <div className="w-12 h-12 rounded-full bg-sbone mx-auto mt-4 mb-2"></div>
            <p className="mx-auto w-fit mb-4 text-sm">Grace Noble</p>
          </DropdownMenuLabel>
          <div className="flex flex-col gap-2">
            {[
              {
                label: "Account settings",
                icon: <Settings size={16} />,
                href: "#",
              },
              { label: "Support", icon: <Info size={16} />, href: "#" },
            ].map((item, index) => (
              <DropdownMenuItem
                key={index}
                className=" rounded-md hover:bg-sbone/40"
              >
                <a
                  href={item.href}
                  className="flex justify-between items-center text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none  w-full"
                >
                  {item.label}
                  {item.icon}
                </a>
              </DropdownMenuItem>
            ))}

            <DropdownMenuItem className=" rounded-md hover:bg-sbone/40">
              <button
                type="submit"
                className="flex justify-between items-center text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none  w-full"
              >
                Sign out
                <ArrowRightFromLine size={16} className="text-red-500" />
              </button>
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  } else {
    return <LoginDialog />;
  }
};

export default UserButton;
