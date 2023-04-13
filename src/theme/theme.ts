import { extendTheme } from "@chakra-ui/react";
import styles from "./styles";
import breakpoints from "./breakpoints";
import Button from "./components/button";
import badgeStyles from "./components/badge";
import linkStyles from "./components/link";
import drawerStyles from "./components/drawer";
import switchStyles from "./components/switch";
import { CardComponent } from "./additions/card/Card";
import { CardBodyComponent } from "./additions/card/CardBody";
import { CardHeaderComponent } from "./additions/card/CardHeader";
import { MainPanelComponent } from "./additions/layout/MainPanel";
import { PanelContentComponent } from "./additions/layout/PanelContent";
import { PanelContainerComponent } from "./additions/layout/PanelContainer";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme(
  { config },
  breakpoints,
  styles,
  Button,
  badgeStyles,
  linkStyles,
  drawerStyles,
  switchStyles,
  CardComponent,
  CardBodyComponent,
  CardHeaderComponent,
  MainPanelComponent,
  PanelContentComponent,
  PanelContainerComponent
);

export default theme;
