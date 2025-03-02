import Container from "@/components/common/container";
import Logo from "./logo";
import Navigation from "./navigation/navigation";
import SearchBar from "./search";
import UserButton from "./user-button";
import Cart from "./cart";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="py-4 flex justify-between items-center">
          <Logo />
          <Navigation />
          <SearchBar />
          <div className="flex gap-10">
            <UserButton />
            <Cart />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
