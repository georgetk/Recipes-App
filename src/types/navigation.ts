import {ROUTE_NAMES} from '../constants';

export type TRootStackParamList = {
  [ROUTE_NAMES.HOME_STACK]: undefined;
  [ROUTE_NAMES.RECIPE_DETAILS_STACK]: {idMeal: string};
  [ROUTE_NAMES.CREATE_RECIPE_STACK]: undefined;

};

export type TRootTabsParamList = {
  [ROUTE_NAMES.HOME]: undefined;
  [ROUTE_NAMES.SAVED_RECIPES]: undefined;
  [ROUTE_NAMES.CREATE_RECIPE]: undefined;
  [ROUTE_NAMES.NOTIFICATIONS]: undefined;
  [ROUTE_NAMES.MY_PROFILE]: undefined;
};
