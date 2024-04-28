import Image from "next/image";
import Link from "next/link";
Image;
const Logo = () => {
  return (
    <div>
      <Link  href="/">
        <Image className="h-6 w-auto" src={'/icons/logo.svg'} alt='logo' width={100} height={50} priority></Image>
      </Link>
    </div>
  );
};

export default Logo;
