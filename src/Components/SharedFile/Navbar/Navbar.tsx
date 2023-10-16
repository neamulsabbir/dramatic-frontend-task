import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar, openSidebar } from "@/redux/features/sidebarSlice";
import {
  StickyNavbar,
  CustomP,
  Input,
  DesktopNavbarContainer,
  ProfileImg,
  InputSection,
  Icon,
  NewP,
  NavItems,
  MobileNavbarContainer,
  MobInputSection,
  MobRightSide,
  Menu,
  Active,
} from "./Stytle";
import SearchIcon from "../SVGIcon/SearchIcon";
import custom from "./custom.module.css";
import MenuIcon from "../SVGIcon/MenuIcon";
import Sidebar from "./Sidebar/Sidebar";
import logo from "../../../assets/logo.png";
import Profile from "../../../assets/profile.png";
import GiftIcon from "../SVGIcon/GiftIcon";
import BellIcon from "../SVGIcon/BellIcon";

const Navbar = () => {
  const [activeRoute, setActiveRoute] = useState("Home");
  const handleRouteChange = (route: string): void => {
    setActiveRoute(route);
  };
  const dispatch = useDispatch();
  const isOpen = useSelector((state: any) => state.sidebar.isOpen);

  const handleSidebar = () => {
    if (!isOpen) {
      dispatch(openSidebar());
    } else {
      dispatch(closeSidebar());
    }
  };

  return (
    <StickyNavbar>
      <DesktopNavbarContainer>
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <NavItems onClick={() => handleRouteChange("Home")} href="/">
          <CustomP  active={activeRoute === "Home"}>HOME</CustomP>
          <div className={activeRoute === "Home" ? custom.active : ""}></div>
        </NavItems>
        <NavItems onClick={() => handleRouteChange("Tvshow")} href="/tv-show">
        <CustomP  active={activeRoute === "Tvshow"}>TV SHOW</CustomP>
          <div className={activeRoute === "Tvshow" ? custom.active : ""}></div>
        </NavItems>
        <NavItems onClick={() => handleRouteChange("Movies")} href="/movies">
          <CustomP  active={activeRoute === "Movies"}>MOVIES</CustomP>
          <div className={activeRoute === "Movies" ? custom.active : ""}></div>
        </NavItems>
        <NavItems onClick={() => handleRouteChange("New")} href="/new">
          <NewP active={activeRoute === "New"}>NEW</NewP>
          <div className={activeRoute === "New" ? custom.active : ""}></div>
        </NavItems>
        <InputSection>
          <Input type="search" placeholder="Search" />
          <Icon>
            <SearchIcon />
          </Icon>
        </InputSection>
        <GiftIcon />
        <BellIcon />
        <ProfileImg>
          <Image src={Profile} alt="logo" />
          <Active></Active>
        </ProfileImg>
      </DesktopNavbarContainer>

      <MobileNavbarContainer>
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <MobRightSide>
          <MobInputSection>
            <Input type="search" placeholder="Search" />
            <Icon>
              <SearchIcon />
            </Icon>
          </MobInputSection>
          <ProfileImg>
            <Image src={Profile} alt="logo" />
            <Active></Active>
          </ProfileImg>
          <Menu onClick={handleSidebar}>
            <MenuIcon />
          </Menu>
          <Sidebar />
        </MobRightSide>
      </MobileNavbarContainer>
    </StickyNavbar>
  );
};

export default Navbar;
