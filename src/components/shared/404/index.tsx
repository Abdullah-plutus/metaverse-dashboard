import React from "react";
import { Box, Image, Button, Portal, Flex } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Box>
      <Image
        src="./assets/img/404.jpeg"
        objectFit="cover"
        h="calc(100vh)"
        w="full"
        style={{ position: "absolute", left: "0px", top: "0px", zIndex: "-1" }}
      />

      {/* <Button
        position="fixed"
        top={{ sm: "68%", lg: "75%" }}
        left={{ sm: "31%", lg: "41%" }}
        width="263px"
        h="78px"
        variant="brand"
      >
        Go Back
      </Button> */}
    </Box>
  );
}
