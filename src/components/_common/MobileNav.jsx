import React from "react";
import MenuIcon from "./MenuIcon";
import Nav from "./Nav";
import { useToggle } from "../../hooks/useToggle";

const MobileNav = () => {
  const { isToggle: isNavShowing, toggleOff, toggleToFro } = useToggle();

  return (
    <>
      <MenuIcon show={isNavShowing} toggleShow={toggleToFro} />

      {isNavShowing && (
        <Nav
          menuStyle="w-full h-screen fixed top-0 left-0 bg-white/50 backdrop-blur flex-center"
          menuListStyle="flex-apart flex-col"
          menuListItemStyle="text-xl text-charcoal font-heading mb-5"
          setShowOff={toggleOff}
        />
      )}
    </>
  );
};

export default MobileNav;
