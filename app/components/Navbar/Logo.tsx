"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      alt="logo"
      className="hidden cursor-pointer md:block"
      src="/images/logo.png"
      width={100}
      height={100}
    />
  );
};

export default Logo;
