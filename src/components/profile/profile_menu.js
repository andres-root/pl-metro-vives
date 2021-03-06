import React from 'react'
import ReactSVG from 'react-svg';
import PropTypes from 'prop-types';
import { getLanguage } from '../../base/js/utils'

const ProfileMenu = ({ language, userName, profilePic, followers, menuItems }) => {

  const renderMenuItem = (action, label, iconUrl, key) =>
    <a href={action} key={key}>
      <span>{getLanguage(language, label)}</span>
      <ReactSVG path={iconUrl} style={{ width: 20, height: 20 }} />
    </a>

  return (
    <div className="profile" role={`${userName} profile`}>
      <div className="profile__top">
        <img className="top-left" src={profilePic} alt={userName}/>
        <div className="top-right">
          <h4>{userName}</h4>
          <small>{followers} followers</small>
        </div>
      </div>
      <div className="profile__bottom">
        {
          menuItems.map((MenuItem, key) =>
            renderMenuItem(MenuItem.action, MenuItem.label, MenuItem.iconUrl, key)
          )
        }
      </div>
    </div>
  )
}
ProfileMenu.propTypes = {
  language: PropTypes.object,
  userName: PropTypes.string,
  profilePic: PropTypes.string,
  followers: PropTypes.string,
  menuItems: PropTypes.array
}

export default ProfileMenu
