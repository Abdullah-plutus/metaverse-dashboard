import { LAND_TYPES } from "../constants";

const emailValidator = (email: string) =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

const getPageRouteName = (name: string) => {
  switch (name) {
    case LAND_TYPES.RENTAL:
      return "rental";
    case LAND_TYPES.FOOD:
      return "food";
    case LAND_TYPES.FUEL:
      return "fuel";
  }
};
export { emailValidator, getPageRouteName };
