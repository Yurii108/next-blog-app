import React from "react";

import "./style.scss";
import Navigation from "../Navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div>
        <Navigation navLinks={navItems} />
      </div>
    </header>
  );
};
