import { Avatar, Button, List, Skeleton, Space, Tooltip } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import MissionDrawer from "../Drawer/MissionDrawer";
import { useDispatch, useSelector } from "react-redux";
import { GetMissionDetails, UpdateMission } from "../../redux/Actions/MissionAction";
import { AllStep } from "../../redux/Actions/StepAction";
import { toast } from "react-toastify";

const TaskListItem = ({ mission ,id,missionName }) => {
  const [showMissionDrawer, setShowMissionDrawer] = useState(false);
  const getMissionDetails = useSelector((state) => state.getMissionDetails);
  const { loading } = useSelector((state) => state.getMissionDetails);
  const { updateSuccess } = useSelector((state) => state.groupUpdateDelete);
  const missionUpdateDelete = useSelector((state) => state.missionUpdateDelete);
  const dispatch = useDispatch();

  const [isCompleted, setIsCompleted] = useState(mission.isCompleted)


  const handleShowMissionDrawer = () => {
    dispatch(GetMissionDetails(mission.groupId, mission.id));

    if (!loading) {
      setShowMissionDrawer(true);
    }
    dispatch(AllStep(mission.id));
  };

  const handleCloseMissionDrawer = () => {
    setShowMissionDrawer(false);
  };

  useEffect(() => {
    
      setIsCompleted(true)
  
 
  }, [])

  const handleCompletedMission = () => {
 
    
    dispatch(UpdateMission({id,missionName,isCompleted}))

    
  }
  return (
    <Fragment>
      <List.Item
     
        actions={[
          <Space wrap>
            <Tooltip title="Sign as completed">
              <Button
                onClick={
                  () => {
                 
                    handleCompletedMission()
                  }
                }
                className="btn  mx-3"
                shape="circle"
                style={{background : mission.isCompleted ? "#3E54AC" : "#fff"}}
                icon={<i class="fa-solid fa-check" style={{color : mission.isCompleted ? "#fff" : "#222"}}></i>}
              ></Button>
            </Tooltip>
          </Space>,
        ]}
      >
        <List.Item.Meta
           onClick={handleShowMissionDrawer}
          title={mission.missionName}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>

      <MissionDrawer
        missionId={mission.id}
        mission={mission}
        showMissionDrawer={showMissionDrawer}
        handleCloseMissionDrawer={handleCloseMissionDrawer}
      />
    </Fragment>
  );
};

export default TaskListItem;
