import Link from "next/link";

const MenuItem = ({ title, href, Icon }) => {
  return (
    <div>
      <Link href={href} className="mx-4 lg:mx-6 hover:text-amber-600">
        <Icon className="text-2xl sm:hidden mx-3" />
        <div className="hidden sm:inline my-2 text-sm">{title}</div>
      </Link>
    </div>
  );
};

export default MenuItem;
