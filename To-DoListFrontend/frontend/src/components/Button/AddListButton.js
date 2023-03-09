import { Button } from 'antd'
import React, { Fragment, useEffect, useState } from 'react'
import NewListModal from '../Modal/NewListModal'
import { useDispatch, useSelector } from 'react-redux'
import { AddGroup } from '../../redux/Actions/GroupAction'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AddListButton = ({auth}) => {

  const [userId, setUserId] = useState(auth.user.id)
  const [groupName, setGroupName] = useState("")

  const navigate = useNavigate()
  const {success} = useSelector((state) => state.addNewGroup)
  const addNewGroup = useSelector((state) => state.addNewGroup)

  // modal ekleyelim liste için
  const [showNewListModal, setShowNewListModal] = useState(false)

  const handleShowNewListModal = () => {
    setShowNewListModal(true)
  }

  const handleCancelNewListModal = () => {
    setShowNewListModal(false)
  } 
  useEffect(() => {
    setUserId(auth.user.id)
  }, [auth])
  const dispatch = useDispatch()

  const handleAddNewGroup =() => {
      
      dispatch(AddGroup({userId,groupName}))
      if (!success) {
        setShowNewListModal(false)
        
      }
      if (addNewGroup.group.success) {
        toast(addNewGroup.group.message)
       
      }
  }


  return (
    <Fragment>
    <Button className='mb-3' style={{position:'fixed', bottom:0,}} type="primary" shape="round"  size="medium"
    onClick={handleShowNewListModal}
    >
        Add New List 
      </Button>

     
  <NewListModal
  handleAddNewGroup={handleAddNewGroup}
  groupName={groupName} 
  setGroupName={setGroupName} 
  showNewListModal={showNewListModal}
  handleCancelNewListModal={handleCancelNewListModal}
/>
   
    </Fragment>
  )
}

export default AddListButton


