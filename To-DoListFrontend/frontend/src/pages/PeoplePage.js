import React, { Fragment, useEffect } from 'react'
import MainLayout from '../components/Layout/MainLayout'
import PersonLayout from '../components/Layout/PersonLayout'
import PersonList from '../components/List/PersonList'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_PERSON_RESET } from '../redux/Constants/PersonConstants'
import { AllPerson } from '../redux/Actions/PersonAction'

const PeoplePage = () => {

  const auth = useSelector((state) => state.auth)
 
  const getAllPerson = useSelector((state) => state.getAllPerson)
  const {success} = useSelector((state) => state.addNewPerson)

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(AllPerson(auth.user.id))
    if (success) {
      dispatch({type : ADD_PERSON_RESET})
    }
 

    
  }, [auth.user.id,success])
  return (
    <Fragment>
        <PersonLayout>
      
              {getAllPerson.loading == true ?  <h2>loading</h2> :  (
                <>
                <h2>personPage</h2>
            <PersonList getAllPerson={getAllPerson} auth={auth} userId = {auth.user.id} />
              </> 
              )}
        
        </PersonLayout>
    </Fragment>
  )
}

export default PeoplePage