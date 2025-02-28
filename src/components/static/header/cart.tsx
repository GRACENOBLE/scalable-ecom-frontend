import { ArrowRightFromLine, Info, Settings, UserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const Cart = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none border-none flex items-center gap-2 text-sm font-semibold">
        <ShoppingCart size={16} strokeWidth={2} />
        Cart
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
};

export default Cart;
