import React from 'react';
import './profile.css';

const Profile = () => {
  return (
    <div className="mProfile">
      <div className="mProfile-wrapper">
        <div className="mProfile-info">
          <div className="mProfile-infoWrapper">
            <div className="mProfile-infoGreet">
              <p>
                Hi 👋, I'm <strong>Frendy Guo</strong> a <strong>Frontend Engineer</strong> from <strong>Indonesia</strong>.
                <br />
                Welcome to my <strong>personal blog</strong>. This is where I share my <strong>thoughts</strong> about the latest <strong>web technologies</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
