import Link from "next/link";

const MenuItem = ({ title, href, Icon }) => {
  return (
    <div>
      <Link href={href} className=" hover:text-amber-600">
        <Icon className="text-2xl sm:hidden space-x-3" />
        <div className="hidden sm:inline text-sm">{title}</div>
      </Link>
    </div>
  );
};

export default MenuItem;
