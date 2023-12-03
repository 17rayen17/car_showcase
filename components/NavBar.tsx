import Image from "next/image";
import Link from "next/link";
import { CustomBtn } from ".";

const NavBar = () => {
return (
  <header className="absolute w-full z-20">
    <nav className="flex flex-between items-center max-w-[1440px] mx-auto sm:px-16 px-6 py-4">
      <Link href={"/"} className="flex-center">
        <Image src="/carshowlogo.svg" alt="logo" width={200} height={35} className="object-contain" />
      </Link>
      <CustomBtn
        title="Sign In"
        containerStyles="z-10 rounded-full text-primary-blue bg-white min-w-[130px]"
        btnType = "button"
      />
    </nav>
  </header>
);
};

export default NavBar;
