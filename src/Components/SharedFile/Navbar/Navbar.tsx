"use client";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import Profile from "../../../assets/profile.png";
import GiftIcon from "../SVGIcon/GiftIcon";
import BellIcon from "../SVGIcon/BellIcon";
import Link from "next/link";
import { Active, CustomP, Input, DesktopNavbarContainer, ProfileImg,NewP } from "./Stytle";

const Navbar = () => {
  return (
    <div>
      <DesktopNavbarContainer>
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <CustomP>HOME</CustomP>
        <CustomP>TV SHOW</CustomP>
        <CustomP>MOVIES</CustomP>
        <NewP>NEW</NewP>
        <Input type="search" placeholder="Search" />
        <GiftIcon />
        <BellIcon />
        <ProfileImg>
          <Image src={Profile} alt="logo" />
          <Active></Active>
        </ProfileImg>
      </DesktopNavbarContainer>
    </div>
  );
};

export default Navbar;
