"use client";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import Profile from "../../../assets/profile.png";
import GiftIcon from "../SVGIcon/GiftIcon";
import BellIcon from "../SVGIcon/BellIcon";
import Link from "next/link";
import { Active, CustomP, Input, NavbarContainer, ProfileImg } from "./Stytle";

const Navbar = () => {
  return (
    <div>
      <NavbarContainer>
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <CustomP>HOME</CustomP>
        <CustomP>TV SHOW</CustomP>
        <CustomP>MOVIES</CustomP>
        <CustomP>NEW</CustomP>
        <Input type="search" placeholder="Search" />
        <GiftIcon />
        <BellIcon />
        <ProfileImg>
          <Image src={Profile} alt="logo" />
          <Active></Active>
        </ProfileImg>
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
