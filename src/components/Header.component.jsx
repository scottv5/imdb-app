import Link from "next/link";

import MenuItem from "./MenuItem.component";
import DarkModeSwitch from "./DarkModeSwitch.component";

import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";

const Header = () => {
  return (
    <div className="flex justify-between sm:px-auto p-4 max-w-6xl items-center mx-auto">
      <div className="flex space-x-4">
        <MenuItem title="HOME" href="/?genre=fetchTrending" Icon={AiFillHome} />
        <MenuItem title="ABOUT" href="/about" Icon={AiFillInfoCircle} />
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href="/?genre=fetchTrending">
          <h2 className="text-2xl">
            <span className="bg-amber-500 font-bold py-1 px-2 mr-1 rounded-lg">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
