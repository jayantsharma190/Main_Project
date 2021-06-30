import React from "react";
import { Box, Layer, Text, Button } from "grommet";
import { Close } from "grommet-icons";
import PropTypes from "prop-types";

import RemoveFocus from "./RemoveFocus";

const MessageLayer = ({ message, setLayer, title }) => {
  return (
    <Layer position="center">
      <Box gap="small" width="35vw" height={{ min: "25vh", max: "35vh" }}>
        <Box
          justify="between"
          direction="row"
          pad={{
            top: "medium",
            left: "medium",
            right: "medium",
            bottom: "small",
          }}
          height={{ min: "52px" }}
        >
          <Text size="21px">{title}</Text>
          <RemoveFocus>
            <Box onClick={() => setLayer(false)} pad={{ top: "xsmall" }}>
              <Close size="20px" />
            </Box>
          </RemoveFocus>
        </Box>
        <Box
          pad={{
            right: "large",
            left: "medium",
            bottom: "medium",
            top: "small",
          }}
          overflow="auto"
        >
          <Text size="12px">{message}</Text>
        </Box>
      </Box>
      <Box
        as="footer"
        justify="end"
        pad={{ vertical: "small", right: "medium" }}
      >
        <Button
          alignSelf="end"
          margin={{ vertical: "small" }}
          label="Ok"
          primary
          onClick={() => setLayer(false)}
        />
      </Box>
    </Layer>
  );
};

MessageLayer.propTypes = {
  setLayer: PropTypes.func,
  message: PropTypes.string,
  title: PropTypes.string,
};

export default MessageLayer;
