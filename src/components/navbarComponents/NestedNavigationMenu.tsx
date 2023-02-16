import React, { useEffect, useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { IMenu } from "../../interfaces/LayoutInterface";
import { StyledNavLink } from "../../styles/global.style";
import { useLocation } from "react-router";
import {
  ImageWarper,
  MenuItem,
  RightArrowContainer,
  SettingsContent,
  SettingsSubMenuOptions,
  SettingsSubMenuOptionsWarper,
  SubMenuTitle,
} from "../../styles/NavBarComponent.style";

type Props = {
  parentMenu: any;
  childMenuList: IMenu[];
  isOpen: boolean;
  setIsOpen: (isopen: boolean) => void;
};

function NestedNavigationMenu({
  parentMenu,
  childMenuList,
  isOpen,
  setIsOpen,
}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activePath = useLocation().pathname;
  const [isPathActive, setIsPathActive] = useState<boolean>(false);

  useEffect(() => {
    setIsPathActive(
      childMenuList[0].route.split("/")[1] === activePath.split("/")[1]
    );
  }, [activePath]);

  return (
    <SettingsSubMenuOptionsWarper
      onMouseEnter={() => setIsMenuOpen((prev) => !prev)}
      onMouseLeave={() => setIsMenuOpen((prev) => !prev)}
    >
      <MenuItem
        className={`${isPathActive && !isOpen && "closedActive"} ${
          isPathActive && isOpen && "active"
        }`}
      >
        <ImageWarper
          className={`${isPathActive && !isOpen && "imgWrapperActive"}`}
        >
          {parentMenu.image}
        </ImageWarper>
        <div className={!isOpen ? "hidden" : ""}>{parentMenu.title}</div>
        <RightArrowContainer>
          <KeyboardArrowRightIcon color="inherit" />
        </RightArrowContainer>
      </MenuItem>
      {isMenuOpen && (
        <SettingsContent>
          {childMenuList?.map((menu: IMenu) => (
            <StyledNavLink to={menu.route} key={menu.title}>
              <SettingsSubMenuOptions
                key={menu.title}
                onClick={() => setIsOpen(false)}
              >
                <div>{menu.image}</div>
                <SubMenuTitle>{menu.title}</SubMenuTitle>
              </SettingsSubMenuOptions>
            </StyledNavLink>
          ))}
        </SettingsContent>
      )}
    </SettingsSubMenuOptionsWarper>
  );
}

export default NestedNavigationMenu;
