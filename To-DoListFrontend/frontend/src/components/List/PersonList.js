import { List } from 'antd'
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AllPerson } from '../../redux/Actions/PersonAction'
import { ADD_PERSON_RESET } from '../../redux/Constants/PersonConstants'

const PersonList = ({getAllPerson,auth , userId}) => {



  return (
    <Fragment>
        <h6 className="my-3">People {userId} </h6>
      <hr />

      <div
        className="scrollbar-ripe-malinka"
        style={{ maxHeight: "400px", overflowY: "auto" }}
      >
        <List class="my-4" itemLayout="horizontal">
               {getAllPerson.people.map((person) => (
              <List.Item>
                {person.firstName}
              </List.Item>
             ))}
        </List>
      </div>
    </Fragment>
  )
}

export default PersonList