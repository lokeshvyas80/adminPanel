import React from 'react';
import { Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default Header;
