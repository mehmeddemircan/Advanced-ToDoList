import { List } from 'antd'
import React, { Fragment } from 'react'
import TaskListItem from './TaskListItem'

const CompletedList = ({getCompletedMissions}) => {
  return (
    <Fragment>
        <div
            className="scrollbar-ripe-malinka"
            style={{ maxHeight: "45rem", overflowY: "auto" }}
          >
      <List class="my-4" itemLayout="horizontal">
              {getCompletedMissions.missions.map((mission) => (
                  <TaskListItem
                    key={mission.id}
                    mission={mission}
                    groupId={mission.groupId}
                    id={mission.id}
                    missionName={mission.missionName}
                  />
                ))}
            </List>
            </div>
    </Fragment>
  )
}

export default CompletedList