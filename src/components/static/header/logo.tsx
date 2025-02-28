import { ShoppingBasket } from "lucide-react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link className="text-2xl font-semibold flex items-center gap-2" href={"/"}>
      {/* <ShoppingBasket className="text-primary -translate-y-1" size={32} /> */}
      Shopcart
    </Link>
  );
};

export default Logo;
