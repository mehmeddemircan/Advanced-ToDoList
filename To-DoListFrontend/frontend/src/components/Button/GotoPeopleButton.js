import { Button } from 'antd'
import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { AllPerson } from '../../redux/Actions/PersonAction'
import { useDispatch, useSelector } from 'react-redux'

const GotoPeopleButton = () => {
    const navigate = useNavigate()

    const auth = useSelector((state) => state.auth)
    const getAllPerson = useSelector((state) => state.getAllPerson)
    const dispatch = useDispatch()
    const handleGetAllPerson = () => {
        dispatch(AllPerson(auth.user.id))
     
            navigate('/person')
   
    }   

  return (
        <Fragment>
            <button onClick={  handleGetAllPerson}
              
            
          className='btn  btn-light mx-2' >
                Go to People
            </button>
        </Fragment>
  )
}

export default GotoPeopleButton