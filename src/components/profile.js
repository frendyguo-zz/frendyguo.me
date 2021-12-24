import React from 'react';
import './profile.css';

const Profile = () => {
  return (
    <div className="mProfile">
      <div className="mProfile-wrapper">
        <div className="mProfile-info">
          <div className="mProfile-infoWrapper">
            <div className="mProfile-infoGreet">
              <h1>Hi 👋, I'm <strong>Frendy Guo</strong></h1>
              <p>
                I'm a <strong>Frontend Engineer</strong> from <strong>Indonesia</strong>. I mainly work with <a href="https://reactjs.org/">React</a> and <a href="https://www.typescriptlang.org/">Typescript</a>. Welcome to my personal blog. This is where I share my thoughts about the latest web technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
