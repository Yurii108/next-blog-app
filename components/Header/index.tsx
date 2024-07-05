import Link from "next/link";
import React from "react";

import "./style.scss";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div>
        <Link href={"/"}>Home</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/about"}>About</Link>
      </div>
    </header>
  );
};
