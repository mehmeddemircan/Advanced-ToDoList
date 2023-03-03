import { Button } from 'antd'
import React, { Fragment, useState } from 'react'
import NewListModal from '../Modal/NewListModal'

const AddListButton = () => {

    // modal ekleyelim liste için
    const [showNewListModal, setShowNewListModal] = useState(false)

    const handleShowNewListModal = () => {
      setShowNewListModal(true)
    }

    const handleCancelNewListModal = () => {
      setShowNewListModal(false)
    } 
  return (
    <Fragment>
    <Button style={{position:'fixed',marginTop: "12px"}} type="primary" shape="round"  size="medium"
    onClick={handleShowNewListModal}
    >
        Add New List 
      </Button>

      <NewListModal 
        showNewListModal={showNewListModal}
        handleCancelNewListModal={handleCancelNewListModal}
      />
    </Fragment>
  )
}

export default AddListButton


