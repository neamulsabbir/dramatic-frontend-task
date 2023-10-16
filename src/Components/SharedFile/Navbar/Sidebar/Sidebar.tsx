import { useSelector } from "react-redux";
import custom from "../custom.module.css";
import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";

const Sidebar = () => {
  const [activeRoute, setActiveRoute] = useState("Home");
  const handleRouteChange = (route: string): void => {
    setActiveRoute(route);
  };

  const isOpen = useSelector((state: any) => state.sidebar.isOpen);

  const sidebarClasses = `${custom.sidebar} ${
    isOpen ? custom.open : custom.close
  }`;
  return (
    <div className={sidebarClasses}>
      <CustomP>
        <NavLink
          onClick={() => handleRouteChange("Home")}
          className={activeRoute === "Home" ? custom.routeActive : ""}
          href="/"
        >
          Home
        </NavLink>
      </CustomP>
      <CustomP>
        <NavLink
          onClick={() => handleRouteChange("Tvshow")}
          href="/tv-show"
          className={activeRoute === "Tvshow" ? custom.routeActive : ""}
        >
          TV SHOW
        </NavLink>
      </CustomP>
      <CustomP>
        <NavLink
          onClick={() => handleRouteChange("Movies")}
          href="/movies"
          className={activeRoute === "Movies" ? custom.routeActive : ""}
        >
          MOVIES
        </NavLink>
      </CustomP>
      <CustomP>
        <NavLink
          onClick={() => handleRouteChange("New")}
          href="/new"
          className={activeRoute === "New" ? custom.routeActive : ""}
        >
          NEW
        </NavLink>
      </CustomP>
    </div>
  );
};

export default Sidebar;

const CustomP = styled.p`
  margin-top: 15px;
`;
const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  color: white;
  font-family: Montserrat;
  text-align: right;
`;
