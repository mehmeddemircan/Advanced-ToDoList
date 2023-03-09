import { Breadcrumb, Menu } from 'antd'


import React, { Fragment } from 'react'
import PersonHeader from '../Header/PersonHeader'
import AddPersonButton from '../Button/AddPersonButton'


const PersonLayout = (props) => {
  return (
        <Fragment>
            
                <PersonHeader />
         
            <div className='container'>

            <AddPersonButton />
        
           

            {props.children}

            </div>
      


        </Fragment>
  )
}

export default PersonLayout