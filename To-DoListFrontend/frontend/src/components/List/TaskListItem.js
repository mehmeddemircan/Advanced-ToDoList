import { Avatar, List } from 'antd'
import React, { Fragment } from 'react'

const TaskListItem = ({getMissionsByList}) => {
  return (
   <Fragment>
    
    {getMissionsByList.missions.map((mission) => (
      <List.Item>
      <List.Item.Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title={<a href="https://ant.design">{mission.text}</a>}
        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
      />
    </List.Item>
    ))}
   </Fragment>
  )
}

export default TaskListItem