import React from "react";
import { Box, Portal, Flex } from "@chakra-ui/react";
import MainPanel from "./MainPanel";
import PanelContainer from "./PanelContainer";
import PanelContent from "./PanelContent";
import { Sidebar, Header } from "..";

export default function Layout(props: any) {
  const mainPanel = React.createRef();
  const getActiveRoute: any = (routes: any) => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else if (routes[i].category) {
        let categoryActiveRoute = getActiveRoute(routes[i].views);
        if (categoryActiveRoute !== activeRoute) {
          return categoryActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };

  return (
    <Box>
      <Sidebar />
      <MainPanel
        ref={mainPanel}
        w={{
          base: "100%",
          xl: "calc(100% - 275px)",
        }}
      >
        <Portal>
          <Header pageTitle={props.pageTitle} />
        </Portal>
        <PanelContent>
          <PanelContainer>
            <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
              {props.children}{" "}
            </Flex>
          </PanelContainer>
        </PanelContent>
      </MainPanel>
    </Box>
  );
}
