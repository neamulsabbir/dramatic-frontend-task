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
  padding: 95px 81px 41px 81px;
  background-color: #161214;
`;
const FooterSection = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 10px;
  @media screen and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  /* justify-content: space-around; */
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
  font-family: Montserrat;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  padding: 0px 14px 0 13px;
`;
const FooterTitle = styled.h3`
  color: #fff;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 700;
  margin-bottom: 13px;
  @media screen and (max-width: 1023px) {
    margin-top: 20px;
  }
`;
const FooterLinks = styled(Link)`
  color: #fff;
  font-size: 14px;
  font-family: Roboto;
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
  font-family: Roboto;
  font-weight: 400;
  font-family: Roboto;
  /* display: flex; */
`;
