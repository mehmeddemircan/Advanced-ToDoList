import { Avatar, List } from 'antd'
import React, { Fragment, useState } from 'react'
import ViewProfile from '../../Drawer/ViewProfile';

const AccountSegment = ({auth}) => {

  const [open, setOpen] = useState(false);
  
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    // auth gibi bir şey yapmak lazım 
    <Fragment>
       <List.Item 
      actions={[
        <a onClick={showDrawer}>
          View Profile
        </a>
       
      ]}
      >
         <ViewProfile 
          auth={auth}
         open={open}
          onClose={onClose}
        />
      <List.Item.Meta
      avatar={
        <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
      }
      title={<a href="https://ant.design/index-cn">{auth.user.firstName}<a className='mx-2'>{auth.user.lastName}</a> </a>}
      description="Progresser XTech"
    />
    </List.Item>
    </Fragment>
    
     
   
  )
}

export default AccountSegment