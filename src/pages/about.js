import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ProfPic from '../images/profile-picture.jpg';
import '../styles/about.css';

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About Me" slug="/about" />
      <div className="mAboutPage">
        <div className="mAboutPage-wrapper">
          <div className="mAboutPage-description">
            <section className="mAboutPage-descriptionSection">
              <h1 className="mAboutPage-descriptionSectionHeading">
                <span>
                  About Me
                </span>
              </h1>
              <p className="mAboutPage-descriptionSectionParagraph">
                Hi <span role="img" aria-label="Waving emoji">👋</span>, I'm Frendy, a frontend software engineer based in Jakarta, Indonesia, with 4 years of experience. I enjoy building stuff and make it live. I break down complex problems into smaller, manageable pieces and turn them into a minimalistic interface with an intuitive experience.
              </p>
              <p className="mAboutPage-descriptionSectionParagraph">
                I also enjoy reading. I make it one of my priorities in life. The insights and perspective the book gave me have inspired me to take more challenges and grow as a person.
              </p>
              <p className="mAboutPage-descriptionSectionParagraph">
                Here are some technologies I've been working with:
              </p>
              <div className="mAboutPage-descriptionSectionSkill">
                <ul className="mAboutPage-descriptionSectionSkillList">
                  <li className="mAboutPage-descriptionSectionSkillListItem">HTML</li>
                  <li className="mAboutPage-descriptionSectionSkillListItem">CSS & SASS</li>
                  <li className="mAboutPage-descriptionSectionSkillListItem">Javascript (ES6)</li>
                  <li className="mAboutPage-descriptionSectionSkillListItem">React</li>
                  <li className="mAboutPage-descriptionSectionSkillListItem">JQuery</li>
                  <li className="mAboutPage-descriptionSectionSkillListItem">Jest</li>
                  <li className="mAboutPage-descriptionSectionSkillListItem">Enzyme</li>
                  <li className="mAboutPage-descriptionSectionSkillListItem">Selenium</li>
                </ul>
              </div>
            </section>
            <section className="mAboutPage-descriptionSection">
              <h2 className="mAboutPage-descriptionSectionSubheading">
                <span>
                  Where I've Worked
                </span>
              </h2>
              <div className="mAboutPage-descriptionSectionExperience">
                <div className="mAboutPage-descriptionSectionExperienceItem">
                  <div className="mAboutPage-descriptionSectionExperienceItemOrg">
                    Kurio
                  </div>
                  <div className="mAboutPage-descriptionSectionExperienceItemInfo">
                    <div className="mAboutPage-descriptionSectionExperienceItemInfoRole">Senior Frontend Engineer <span>@ Kurio</span></div>
                    <div className="mAboutPage-descriptionSectionExperienceItemInfoTime">March 2017 - Present</div>
                  </div>
                </div>
                <div className="mAboutPage-descriptionSectionExperienceItem">
                  <div className="mAboutPage-descriptionSectionExperienceItemOrg">
                    Khayaland
                  </div>
                  <div className="mAboutPage-descriptionSectionExperienceItemInfo">
                    <div className="mAboutPage-descriptionSectionExperienceItemInfoRole">Junior Backend Engineer <span>@ Khayaland</span></div>
                    <div className="mAboutPage-descriptionSectionExperienceItemInfoTime">March 2016 - February 2017</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="mAboutPage-profilePic">
            <div
              className="mAboutPage-profilePicSrc"
              style={{
                backgroundImage: `url(${ProfPic})`,
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
