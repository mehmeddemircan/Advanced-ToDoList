import { Modal } from 'antd'
import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddPerson } from '../../redux/Actions/PersonAction'

export const NewPersonModal = ({handleAddPerson,showNewPersonModal,handleCancelNewPersonModal,firstName,setFirstName,lastName,setLastName,userId}) => {
  
    

  return (
    <Fragment>
    <Modal
        title="Add Person"
        centered
        open={showNewPersonModal}
        onOk={handleCancelNewPersonModal}
        onCancel={handleCancelNewPersonModal}
        footer={[
            <button
            class="btn btn-primary"
            onClick={handleAddPerson}
         
            disabled={firstName === "" && lastName ==="" ? true : false}
          >
            Create
          </button>
        ]}
      >
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">
              First Name{" "}
            </label>
            <input
              type="text"
              class="form-control "
              id="person-name"
               value={firstName}
               onChange={(e) => setFirstName(e.target.value)}
            />

<label for="recipient-name" class="col-form-label">
              Last Name{" "}
            </label>
            <input
              type="text"
              class="form-control "
              id="person-name"
               value={lastName}
               onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </form>
      </Modal>
      </Fragment>
  )
}
