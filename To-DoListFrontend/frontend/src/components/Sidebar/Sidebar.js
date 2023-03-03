import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import React, { Fragment, useState } from "react";
import TaskList from "../List/TaskList";
import AccountSegment from "./Account/AccountSegment";
import AddListButton from "../Button/AddListButton";
import Categories from "./Categories/Categories";
import ListsSegment from "./Lists/ListsSegment";
import SearchBox from "./SearchBar/SearchBox";



const Sidebar = ({auth}) => {



  return (
    <Fragment>
      <Sider class="bg-light mx-4" width={300}>
        <AccountSegment auth={auth} />
        <SearchBox />

        <Menu
          mode="inline"
          style={{
            maxHeight: "75vh",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <Categories />
          <ListsSegment />
        </Menu>
        <AddListButton />
      </Sider>
    </Fragment>
  );
};

export default Sidebar;
