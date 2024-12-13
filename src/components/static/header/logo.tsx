import { ShoppingCart } from "lucide-react";

const Logo = () => {
  return (
    <div className="text-2xl font-semibold flex items-center gap-2">
      <ShoppingCart className="text-orange-500" />
      Shopcart
    </div>
  );
};

export default Logo;
