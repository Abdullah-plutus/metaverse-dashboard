// Chakra Icons
import { BellIcon, SearchIcon } from "@chakra-ui/icons";
// Chakra Imports
import {
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { IoMdLogOut } from "react-icons/io";
// Assets
// import avatar1 from "assets/img/avatars/avatar1.png";
// import avatar2 from "assets/img/avatars/avatar2.png";
// import avatar3 from "assets/img/avatars/avatar3.png";
// Custom Icons
import { ProfileIcon, SettingsIcon } from "../Icons";
// Custom Components
// import { ItemContent } from "components/Menu/ItemContent";
// import { SidebarResponsive } from "components/Sidebar/Sidebar";

import React from "react";
import { NavLink } from "react-router-dom";
// import routes from "routes.js";

export default function HeaderLinks(props: any) {
  const { variant, children, fixed, secondary, onOpen, ...rest } = props;

  // Chakra Color Mode
  let inputBg = "#0F1535";
  let mainText = "gray.400";
  let navbarIcon = "white";
  let searchIcon = "white";

  if (secondary) {
    navbarIcon = "white";
    mainText = "white";
  }
  const settingsRef = React.useRef();
  return (
    <Flex
      pe={{ sm: "0px", md: "16px" }}
      w={{ sm: "100%", md: "auto" }}
      alignItems="center"
      flexDirection="row"
    >
      {/* <InputGroup
        cursor="pointer"
        bg={inputBg}
        borderRadius="15px"
        borderColor="rgba(226, 232, 240, 0.3)"
        w={{
          sm: "128px",
          md: "200px",
        }}
        me={{ sm: "auto", md: "20px" }}
      >
        <InputLeftElement
          children={
            <IconButton
              aria-label="sd"
              bg="inherit"
              borderRadius="inherit"
              //      _hover='none'
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
              icon={<SearchIcon color={searchIcon} w="15px" h="15px" />}
            ></IconButton>
          }
        />
        <Input
          fontSize="xs"
          py="11px"
          color={mainText}
          placeholder="Type here..."
          borderRadius="inherit"
        />
      </InputGroup> */}
      <NavLink to="/auth/signin">
        <Button
          ms="0px"
          px="0px"
          me={{ sm: "2px", md: "16px" }}
          color={navbarIcon}
          variant="transparent-with-icon"
          //@ts-ignore
          // rightIcon={
          //   document.documentElement.dir ? (
          //     ""
          //   ) : (
          //     <ProfileIcon color={navbarIcon} w="22px" h="22px" me="0px" />
          //   )
          // }
          // //@ts-ignore
          // leftIcon={
          //   document.documentElement.dir ? (
          //     <ProfileIcon color={navbarIcon} w="22px" h="22px" me="0px" />
          //   ) : (
          //     ""
          //   )
          // }
        >
          <ProfileIcon color={navbarIcon} w="22px" h="22px" me="0px" />
          {/* <Text display={{ sm: "none", md: "flex" }}>Sign In</Text> */}
        </Button>
      </NavLink>
      {/* <SidebarResponsive
        iconColor="gray.500"
        logoText={props.logoText}
        secondary={props.secondary}
        routes={routes}
        // logo={logo}
        {...rest}
      /> */}
      <IoMdLogOut color="white" size="25" />
      {/* <SettingsIcon
        cursor="pointer"
        ms={{ base: "16px", xl: "0px" }}
        me="16px"
        //  ref={settingsRef}
        onClick={props.onOpen}
        color={navbarIcon}
        w="18px"
        h="18px"
      /> */}
    </Flex>
  );
}
