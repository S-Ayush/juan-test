import React from "react";
import { IMenu } from "../../interfaces/LayoutInterface";
import { StyledNavLink } from "../../styles/global.style";
import { ImageWarper, MenuItem } from "../../styles/NavBarComponent.style";

type props = {
  menuObject: IMenu;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

function NavigationMenu({ menuObject, isOpen, setIsOpen }: props) {
  return (
    <StyledNavLink to={menuObject.route} key={menuObject.title}>
      {({ isActive }) => (
        <MenuItem
          onClick={() => setIsOpen(!isOpen)}
          aria-hidden="true"
          className={`${isActive && !isOpen && "closedActive"} ${
            isActive && isOpen && "active"
          }`}
        >
          <ImageWarper
            className={`${isActive && !isOpen && "imgWrapperActive"}`}
          >
            {menuObject.image}
          </ImageWarper>
          <div className={!isOpen ? "hidden" : ""}>{menuObject.title}</div>
        </MenuItem>
      )}
    </StyledNavLink>
  );
}

export default NavigationMenu;
