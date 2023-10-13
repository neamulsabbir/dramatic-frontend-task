import styled from "styled-components";
import DownloadIcon from "../SVGIcon/DownloadIcon";
import ListIcon from "../SVGIcon/ListIcon";
import SettingIcon from "../SVGIcon/SettingIcon";
import UsersIcon from "../SVGIcon/UsersIcon";

const SideMenu = () => {
  return (
    <SideMenuContainer>
      <SideItems>
        <StyledUserIcon>
          <UsersIcon />
        </StyledUserIcon>
        <ListIcon />
        <StyledDownloadIcon>
          <DownloadIcon />
        </StyledDownloadIcon>
        <StyledSettingIcon>
        <SettingIcon />
        </StyledSettingIcon>
      </SideItems>
    </SideMenuContainer>
  );
};

export default SideMenu;

const SideMenuContainer = styled.div`
  display: inline-block;
  margin-top: 32px;
`;
const SideItems = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0px 26px 26px 0px;
  background: linear-gradient(3deg, #130b29 9.89%, #5436a9 100%, #5e47a1 100%);
  padding: 0px 29px;
`;
const StyledUserIcon = styled.div`
  padding: 39px 0 35px 0;
`;

const StyledDownloadIcon = styled.div`
    padding: 31px 0 48px 0;
`
const StyledSettingIcon = styled.div`
    padding-bottom: 42px;
`
