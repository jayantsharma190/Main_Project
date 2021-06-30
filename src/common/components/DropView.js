import React, { useState } from "react";
import { DropButton, Box, Button, Text, Anchor, List } from "grommet";
import { Close, StatusGoodSmall } from "grommet-icons";

import styled from "styled-components";

const StyledDropButton = styled(DropButton)`
  :hover {
    border: none !important;
    box-shadow: none !important;
    color: #267370 !important;
  }
  :focus {
    box-shadow: none !important;
  }
  border: none !important;
  padding: 0px !important;
`;
const DropView = ({
  buttonLabel,
  heading,
  align,
  content,
  width,
  maxHeight,
  alignLabel,
  labelPadding,
}) => {
  const [open, setOpen] = useState(false);

  const onOpen = (e) => {
    e.stopPropagation();
    setOpen(true);
  };
  const onClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  const getDropAlignment = () => {
    const alignDropButton = { top: "top" };
    switch (align) {
      case "left":
        alignDropButton.right = "left";
        break;
      case "right":
        alignDropButton.left = "right";
        break;
    }
    return alignDropButton;
  };
  return (
    <StyledDropButton
      alignSelf={alignLabel}
      label={
        <Box pad={labelPadding}>
          <Anchor onClick={setOpen} color="linkColour">
            {buttonLabel}
          </Anchor>
        </Box>
      }
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      dropAlign={getDropAlignment()}
      margin="xsmall"
      dropContent={
        <Box width={`${width}`} pad="medium" height="medium">
          <Box direction="row" gap="small" justify="between" align="start">
            <Box
              pad={{ top: "5px" }}
              style={{ zIndex: 2 }}
              margin={{ bottom: "medium" }}
            >
              <Text size="large" weight="bold" color="#41a7a4">
                {heading}
              </Text>
            </Box>
          </Box>
          <Box height={{ max: "small" }} overflow="auto">
            <Text wordBreak="break-all">{content}</Text>
          </Box>
          <Box justify="center">
            <Button
              onClick={onClose}
              color="#267370"
              label="Ok"
              margin={{ top: "small" }}
            />
          </Box>
        </Box>
      }
    />
  );
};

DropView.defaultProps = {
  buttonLabel: "View More",
  heading: "List Items",
  listItems: [],
  align: "right",
  width: "18vw",
  maxHeight: "xlarge",
  alignLabel: "center",
  labelPadding: { left: "small", top: "xsmall" },
  content: "Lorem ipsum dummy text",
};

export default DropView;
