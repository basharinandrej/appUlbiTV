import {createSelector} from "@reduxjs/toolkit";
import {getIsAuth, getUserData} from "@entities/user";
import {sidebarItems} from "../sidebarItems";
import {RoutePaths} from "@app/index";



export const getSidebarItems = createSelector(
  getUserData,
  getIsAuth,
  (user, isAuth) => {

  return sidebarItems
    .filter((sidebarItem) => {
      if(isAuth) {
        return sidebarItem
      } else {
        return !sidebarItem.onlyAuth
      }
    })
    .map((sidebarItem) => {
      if(sidebarItem?.path === RoutePaths.profile) {
        return {
          ...sidebarItem,
          path: RoutePaths.profile + user.id
        }
      } else {
        return sidebarItem
      }
    })
})