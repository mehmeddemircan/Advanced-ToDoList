import React, { useEffect } from "react";
import MainLayout from "../components/Layout/MainLayout";
import TaskList from "../components/List/TaskList";
import AddTaskButton from "../components/Button/AddTaskButton";

import ListTitle from "../components/Title/ListTitle";
import { useDispatch, useSelector } from "react-redux";
import { GetSingleGroup } from "../redux/Actions/GroupAction";

const HomePage = () => {
  const getSingleGroup = useSelector((state) => state.getSingleGroup);

  return (
    <MainLayout>
      {/* her bir group için ayrılan kısım bu  */}

      <TaskList getSingleGroup={getSingleGroup} />
    </MainLayout>
  );
};

export default HomePage;
