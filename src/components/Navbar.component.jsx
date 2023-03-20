import NavbarItem from "./NavbarItem.component";

const Navbar = () => {
  return (
    <div className="flex justify-center space-x-6 dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
};

export default Navbar;
