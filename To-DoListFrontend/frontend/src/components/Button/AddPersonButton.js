import React, { Fragment, useState } from "react";
import { NewPersonModal } from "../Modal/NewPersonModal";
import { useDispatch, useSelector } from "react-redux";
import { AddPerson } from "../../redux/Actions/PersonAction";

const AddPersonButton = () => {

    const [showNewPersonModal, setShowNewPersonModal] = useState(false)

    const handleShowNewPersonModal = () => {
        setShowNewPersonModal(true)
    }
    const handleCancelNewPersonModal = () => {
        setShowNewPersonModal(false)
    }
    const auth = useSelector((state) => state.auth)
    const {success} = useSelector((state) => state.addNewPerson)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userId, setUserId] = useState(auth.user.id)

    const dispatch = useDispatch()
    const handleAddPerson = () => {
        dispatch(AddPerson({firstName,lastName,userId}))
        if (!success) {
          setShowNewPersonModal(false)
          
        }
    }
  return (
    <Fragment>
      <div className="row d-flex justify-content-end">
        <button className="btn btn-secondary" onClick={handleShowNewPersonModal}>Add Person</button>
      </div>

      <NewPersonModal 
        handleAddPerson={handleAddPerson}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        userId={userId}

    showNewPersonModal={showNewPersonModal}
    handleCancelNewPersonModal={handleCancelNewPersonModal}
      />
    </Fragment>
  );
};

export default AddPersonButton;
