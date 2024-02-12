import { Button, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import propTypes from "prop-types";

const SecondaryButton = ({ text, link, onClick, ...props }) => {
  return (
    <Button
      display="block"
      borderRadius={30}
      borderColor="#009E77"
      color={"#009E77"}
      _hover={{ bg: "#009E77", color: "#FFFFFF" }}
      fontWeight={"semibold"}
      w="fit-content"
      height="3rem"
      href={link}
      variant="outline"
      textTransform="capitalize"
      onClick={onClick}
      {...props}
    >
      <Link href={link} as={NextLink} _hover={{ textDecoration: "none" }}>
        {text}
      </Link>
    </Button>
  );
};

export default SecondaryButton;

SecondaryButton.propTypes = {
  text: propTypes.string.isRequired,
  link: propTypes.string,
  onClick: propTypes.func,
};
