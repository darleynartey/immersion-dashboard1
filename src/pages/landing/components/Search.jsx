import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MessageIcon from "@mui/icons-material/Message";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar, Badge } from "@mui/material";

const Search = () => {
  return (
    <div className="flex w-full justify-between items-center py-4  ">
      <input
        type="text"
        placeholder="Search here"
        className="px-4 w-[600px] py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500"
      />
      <div className="flex gap-x-10">
        <Avatar>
          <Badge badgeContent={21}>
            <NotificationsNoneIcon />
          </Badge>
        </Avatar>
        <Avatar>
          <Badge badgeContent={53}>
            <MessageIcon />
          </Badge>
        </Avatar>
        <Avatar>
          <Badge badgeContent={15}>
            <CardGiftcardIcon />
          </Badge>
        </Avatar>
        <Avatar>
          <Badge badgeContent={19}>
            <SettingsIcon />
          </Badge>
        </Avatar>{" "}
      </div>

      <div className="flex items-center space-x-2">
        <span>Hello, Samantha</span>
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      </div>
    </div>
  );
};

export default Search;
