import { Box, Text } from "grommet";

const HeadingContainer = ({ heading, children, size }) => {
  return (
    <Box>
      <Text weight="bold" size="xlarge" margin={{ vertical: "small" }}>
        {heading}
      </Text>
      {children}
    </Box>
  );
};
HeadingContainer.defaultProps = {
  size: "xlarge",
};
export default HeadingContainer;
