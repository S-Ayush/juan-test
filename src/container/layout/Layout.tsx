import React, { ReactNode } from "react";
import { ChildDiv, MainDiv } from "../../styles/Layout.style";
import SideBarMenu from "./SideBarMenu";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <MainDiv>
      <SideBarMenu />
      <ChildDiv>{children}</ChildDiv>
    </MainDiv>
  );
}

export default Layout;
