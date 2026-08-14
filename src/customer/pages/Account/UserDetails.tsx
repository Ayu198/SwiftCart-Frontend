import React from 'react'
import ProfileFieldCard from '../../../components/ProfileFieldCard'
import { Divider } from '@mui/material'

const UserDetails = () => {
  return (
    <div className = "flex justify-center py-10">
        <div className = "w-full lg:w-[70%]">
            <div className = "flex pb-3 justify-between items-center">
                <h1 className = "text-2xl font-bold text-gray-600">Personal Details</h1>
            </div>
            <div className = "">
                <ProfileFieldCard keys = {'name'} value = {'Swift'}/>
                <Divider/>
                <ProfileFieldCard keys = {'Email'} value = {'swiftcart11@swift.com'}/>
                <Divider/>
                <ProfileFieldCard keys = {'Mobile'} value = {'2654849873'}/>
            </div>
        </div>
    </div>
  )
}

export default UserDetails