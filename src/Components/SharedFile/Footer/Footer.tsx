"use client";
import DownArrow from "../SVGIcon/DownArrow";
import GlobalIcon from "../SVGIcon/GlobalIcon";
import socialIcon from "../../../assets/Social.svg";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <LanguageSection>
          <LanguageArea>
            <GlobalIcon />
            <Language>English</Language>
            <DownArrow />
          </LanguageArea>
        </LanguageSection>
        <div>
          <FooterTitle>Navigation</FooterTitle>
          <FooterLinks href="/">Home</FooterLinks>{" "}
          <FooterLinks href="/">FAQ</FooterLinks>{" "}
          <FooterLinks href="/">Investor Relations</FooterLinks>{" "}
          <FooterLinks href="/">Jobs</FooterLinks>{" "}
          <FooterLinks href="/">About Us</FooterLinks>{" "}
          <FooterLinks href="/">Help Centre</FooterLinks>{" "}
        </div>
        <div>
          <FooterTitle>LEGAL</FooterTitle>
          <FooterLinks href="/">Privacy Policy</FooterLinks>{" "}
          <FooterLinks href="/">Terms of Service</FooterLinks>{" "}
          <FooterLinks href="/">Cookie Preferences</FooterLinks>{" "}
          <FooterLinks href="/"></FooterLinks>{" "}
        </div>
        <div>
          <FooterTitle>TALK TO US</FooterTitle>
          <FooterLinks href="/">support@ercom.com</FooterLinks>{" "}
          <FooterLinks href="/">+66 2399 1145</FooterLinks>{" "}
        </div>
        <div>
          <FooterTitle>FOLLOW US</FooterTitle>
          <Image src={socialIcon} alt="" />
        </div>
      </FooterSection>
      <CopyTxt>© 2022 Dramatic. All Rights Reserved. </CopyTxt>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  padding: 95px 239px 41px 81px;
  background-color: #161214;
width: 100%;
`;
const FooterSection = styled.div`
  display: flex;
  & > *:first-child {
    margin-right: 87px;
  }
  & > *:nth-child(2) {
    margin-right: 99px;
  }
  & > *:nth-child(3) {
    margin-right: 110px;
  }
  & > *:nth-child(4) {
    margin-right: 139px;
  }
`;
const LanguageSection = styled.div`
  display: inline-block;
`;
const LanguageArea = styled.div`
  display: flex;
  align-items: center;
  background: #362f33;
  padding: 8px 13px 8px 15px;
`;
const Language = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  padding: 0px 14px 0 13px;
`;
const FooterTitle = styled.h3`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 13px;
`;
const FooterLinks = styled(Link)`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  margin-top: 10px;
  text-decoration: none;
  display: block;
`;
const CopyTxt = styled.p`
  margin-top: 27px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
`;
