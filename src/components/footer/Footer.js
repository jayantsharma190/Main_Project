import React from "react";
import "./Footer.css";
import DropView from "../../common/components/DropView";
import { about, contactUs } from "../../messages";
import { Anchor, Box, Footer, Text, ThemeContext } from "grommet";
import { Link } from "react-router-dom";
import { FacebookOption, Instagram, Twitter, Mail } from "grommet-icons";
import styled from "styled-components";
const StyledLink = styled(Link)`
  color: #00ff00 !important;
`;

const Media = () => (
  <Box direction="row">
    <Anchor
      a11yTitle="Share feedback on Github"
      href="https://www.instagram.com/pinpointstay"
      icon={<Instagram color="#267370" />}
    />
    <Anchor
      a11yTitle="Chat with us on Slack"
      href="https://www.facebook.com/Pinpointstay"
      icon={<FacebookOption color="#267370" />}
    />
    <Anchor
      a11yTitle="Follow us on Twitter"
      href="https://twitter.com/"
      icon={<Twitter color="#267370" />}
    />
    <Anchor
      a11yTitle="Send a mail"
      href="mailto:pinpointstay@gmail.com"
      icon={<Mail color="#267370" />}
    />
  </Box>
);

function CompanyFooter() {
  return (
    <Box>
      {console.log("info", about)}
      <ThemeContext.Extend
        value={{
          global: {
            focus: {
              border: {
                color: "none",
              },
            },
          },
        }}
      >
        <Footer
          background="black"
          pad="large"
          flex
          wrap={true}
          style={{ flexBasis: "small" }}
        >
          <Box align="center" direction="row" gap="medium" flex wrap={true}>
            {/* <DropView
              buttonLabel={"About"}
              heading={"About us"}
              width={"medium"}
              content={about}
            />
            <DropView
              buttonLabel={"Contact us"}
              heading={"Contact us"}
              width={"medium"}
              content={contactUs}
            /> */}

            <StyledLink>About</StyledLink>
            <StyledLink>Contact Us</StyledLink>
            <StyledLink to="/privacy-policy">Privacy Policy</StyledLink>
            <StyledLink to="/terms-conditions">Terms and Conditions</StyledLink>
          </Box>
          <Media />
        </Footer>
        <Footer
          background="black"
          pad={{ horizontal: "large", vertical: "small" }}
        >
          <Box margin={{ horizontal: "auto" }}>
            <Text textAlign="center" size="small">
              Copyright © 2021 All rights reserved by pinpointstay.
            </Text>
          </Box>
        </Footer>
      </ThemeContext.Extend>
    </Box>
  );
}

export default CompanyFooter;
