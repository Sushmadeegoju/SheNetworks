import React from 'react'
import "./UserProfileCard.css"
import profile_icon from "../../../assets/images/LisaSu.jpg"

const UserProfileCard = () => {
  return (
    <div className='upc'>
      <div className="gradient"></div>
      <div className="profile-down">
        <img src={profile_icon} alt='' />
        <div className="profile-title">Lisa Su</div>
        <div className="profile-description">
        I am the Chair and CEO at Advanced Micro Devices, a Fortune 500 technology leader. Since joining AMD, we have successfully executed a transformation of our strategy, market focus, and product execution. 
        </div>
        <div className="profile-button">Saved</div>

      </div>


    </div>
  )
}

export default UserProfileCard
