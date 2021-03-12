import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";


function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon></MenuIcon>
        </IconButton>
        <img
          src="https://u01.appmifile.com/images/2019/05/25/65d91020-cff7-4ccd-b469-e5a5296e2e55.jpg"
          alt=""
        />
      </div>

      <div className="header__middle">
        <SearchIcon></SearchIcon>
        <input placeholder="Search mail" type="text" />
        <ArrowDropDownIcon className="header__inputCarel"></ArrowDropDownIcon>
      </div>

      <div className="header__right">
        <IconButton>
          <AppsIcon></AppsIcon>
        </IconButton>

        <IconButton>
          <NotificationsIcon></NotificationsIcon>
        </IconButton>

        <Avatar></Avatar>
      </div>
    </div>
  );
}

export default Header;
