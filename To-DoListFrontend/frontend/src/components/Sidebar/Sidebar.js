import { Badge, Menu, Space } from "antd";
import Sider from "antd/lib/layout/Sider";
import React, { Fragment, useEffect, useState } from "react";

import AccountSegment from "./Account/AccountSegment";
import AddListButton from "../Button/AddListButton";
import Categories from "./Categories/Categories";

import SearchBox from "./SearchBar/SearchBox";
import { useDispatch, useSelector } from "react-redux";

import {
  ADD_GROUP_RESET,
  DELETE_GROUP_RESET,
  UPDATE_GROUP_RESET,
} from "../../redux/Constants/GroupConstants";
import { AllGroup, GetSingleGroup } from "../../redux/Actions/GroupAction";
import { AllMissionsByGroup, GetCompletedMissions, GetUnCompletedMissions } from "../../redux/Actions/MissionAction";
import { GET_ALL_MISSION_BY_GROUP_RESET, UPDATE_MISSION_RESET } from "../../redux/Constants/MissionConstants";

const Sidebar = ({ auth }) => {
  const getAllGroup = useSelector((state) => state.getAllGroup);
  const { deleted } = useSelector((state) => state.groupUpdateDelete);
  const { success } = useSelector((state) => state.addNewGroup);
  const { loading } = useSelector((state) => state.getMissionsByGroup);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AllGroup(auth.user.id));
    if (success) {
      dispatch({ type: ADD_GROUP_RESET });
    }
    if (deleted) {
      dispatch({ type: DELETE_GROUP_RESET });
    }
  }, [auth, success, deleted]);

  const [current, setCurrent] = useState(1);
  const addNewMission = useSelector((state) => state.addNewMission);
  const {updateSuccess} = useSelector((state) => state.missionUpdateDelete);
  const groupUpdateDelete = useSelector((state) => state.groupUpdateDelete);
  const onClick = (e) => {
    setCurrent(e.key);
  };
  const [groupId, setGroupId] = useState(0);

  useEffect(() => {
  

    if (loading) {
      dispatch({ type: GET_ALL_MISSION_BY_GROUP_RESET });
    }
    if (updateSuccess) {
        dispatch({type : UPDATE_MISSION_RESET})
    }
    dispatch(GetUnCompletedMissions(groupId));
    dispatch(GetCompletedMissions(groupId));
  }, [groupId, addNewMission.success,updateSuccess]);

  useEffect(() => {
    dispatch(GetSingleGroup(auth.user.id, groupId));
    if (groupUpdateDelete.updateSuccess) {
      dispatch({type : UPDATE_GROUP_RESET})
    }
  }, [auth, groupId,groupUpdateDelete.updateSuccess]);

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
          defaultSelectedKeys={["1"]}
          onClick={onClick}
          selectedKeys={[current]}
        > 
        <Categories />
          {getAllGroup.groups.map((group) => (
            <>
              <Menu.Item
                key={group.id}
                onClick={() => {
                  setGroupId(group.id);
                }}
              >
                <div className="d-flex justify-content-between">
                  <div>
                  <i class="fa-solid fa-bars"></i>
                
                <a class="mx-2">{group.groupName}</a>
                  </div>
                <div>
                <Space key={group.id}>
                  <Badge count={15}  /> 
              </Space>
                </div>
                    {/* <a>{getMissionsByGroup.missions.data.length}</a> */}
          
                </div>
              </Menu.Item>
            </>
          ))}
        </Menu>
        <AddListButton auth={auth} />
      </Sider>
    </Fragment>
  );
};

export default Sidebar;
