import { Button, Dropdown, Menu, Space, Tooltip } from "antd";
import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { DeleteGroup } from "../../redux/Actions/GroupAction";
import ListTitleButton from "../Button/ListTitleButton";
import GotoPeopleButton from "../Button/GotoPeopleButton";

const ListTitle = ({getSingleGroup,getAllTheme}) => {

 const dispatch = useDispatch()
  const handleDeleteGroup = (groupId) => {
      dispatch(DeleteGroup(groupId))    
  }

  return (
    <div class="row d-flex flex-row justify-content-between align-items-center">
      <div>
        <h2>{getSingleGroup.group.data.groupName}</h2>
      </div>
      <div className="d-inline-flex">
      <GotoPeopleButton />
      <ListTitleButton handleDeleteGroup={handleDeleteGroup} getSingleGroup={getSingleGroup} getAllTheme={getAllTheme} />

      </div>
    </div>
  );
};

export default ListTitle;
