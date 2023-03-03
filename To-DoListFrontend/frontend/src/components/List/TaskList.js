import { Avatar, List } from "antd";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllMissionsByList } from "../../redux/Actions/MissionAction";
import AddTaskButton from "../Button/AddTaskButton";
import ListTitle from "../Title/ListTitle";
import TaskListItem from "./TaskListItem";

const TaskList = () => {
  const getMissionsByList = useSelector((state) => state.getMissionsByList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AllMissionsByList(1));
  }, [dispatch]);

  return (
    <Fragment>
      <ListTitle />
      <List class="my-4" itemLayout="horizontal">
        <TaskListItem getMissionsByList={getMissionsByList} />
      </List>
        <AddTaskButton />
    </Fragment>
  );
};

export default TaskList;
