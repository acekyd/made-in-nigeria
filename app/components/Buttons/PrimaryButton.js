import { Button, Link } from "@chakra-ui/react";

const PrimaryButton = ({ text, link, mobileWidth, desktopWidth }) => {
  return (
    <Button
      display="block"
      borderRadius={30}
      paddingY={3}
      borderColor="#009E77"
      bg="#009E77"
      color={"#FFFFFF"}
      _hover={{
        bg: "#FFFFFF",
        color: "#009E77",
        border: "1px",
        borderColor: "#009E77",
      }}
      fontWeight={"semibold"}
      w={{
        base: mobileWidth,
        sm: mobileWidth,
        md: mobileWidth,
        lg: desktopWidth,
        xl: desktopWidth,
        "2xl": desktopWidth,
      }}
      height="3rem"
      href={link}
      variant="solid"
    >
      <Link href={link} _hover={{ textDecoration: "none" }}>
        {text}
      </Link>
    </Button>
  );
};

export default PrimaryButton;
