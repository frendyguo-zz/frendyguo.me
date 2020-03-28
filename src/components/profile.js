import React from 'react';
import ProfPic from '../images/profile.jpg';
import './profile.css';

const Profile = () => {
  return (
    <div className="mProfile">
      <div className="mProfile-wrapper">
        <div className="mProfile-info">
          <div className="mProfile-infoWrapper">
            <h3 className="mProfile-infoName">Frendy Guo</h3>
            <p className="mProfile-infoRole">
              <span>Frontend Engineer </span>
              <a
                className="mProfile-infoRoleCompany"
                target="_blank"
                href="https://kurio.id"
              >
                @Kurio.id
              </a>
            </p>
            <p className="mProfile-infoDesc">
              <em>
                Passionate about building website
              </em>
            </p>
          </div>
        </div>
        <div className="mProfile-avatar">
          <div
            className="mProfile-avatarSrc"
            style={{
              backgroundImage: `url(${ProfPic})`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
