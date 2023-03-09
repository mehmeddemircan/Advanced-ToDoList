import { Button, Drawer, Input, Space } from "antd";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddStepButton from "../Button/AddStepButton";
import StepList from "../List/StepList";
import { GetMissionDetails } from "../../redux/Actions/MissionAction";
import { AllStep } from "../../redux/Actions/StepAction";
import DeleteMissionButton from "../Button/DeleteMissionButton";

const MissionDrawer = ({
  missionId,
  mission,
  showMissionDrawer,
  handleCloseMissionDrawer,
}) => {
  const { loading } = useSelector((state) => state.getAllStep);
  const getAllStep = useSelector((state) => state.getAllStep);

  return (
    <Fragment>
      <Drawer
        title={mission.missionName}
        width={500}
        onClose={handleCloseMissionDrawer}
        open={showMissionDrawer}
        extra={
          <Space>
            <Button type="primary">OK</Button>
          </Space>
        }
      >
        <AddStepButton key={mission.id} mission={mission} />
        {loading ? null : (
          <StepList
            getAllStep={getAllStep}
            missionId={mission.id}
            mission={mission}
          />
        )}

        <DeleteMissionButton />
      </Drawer>
    </Fragment>
  );
};

export default MissionDrawer;
