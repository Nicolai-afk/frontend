import React, { useState } from 'react';
import './App.css';
import profileImage from './prof.jpg'; 

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [currentHobby, setCurrentHobby] = useState(0);
  const [currentSkill, setCurrentSkill] = useState(0);

  const hobbies = [
    'Playing action games',
    'Singing',
    'Exploring new technologies',
    'Watching movie',
  ];

  const skills = [
    'Basic programming knowledge',
    'Database creation basics',
    'Problem-solving and logical thinking',
    'Teamwork and collaboration',
  ];

  const handleNextHobby = () => {
    setCurrentHobby((prev) => (prev + 1) % hobbies.length);
  };

  const handlePreviousHobby = () => {
    setCurrentHobby((prev) => (prev - 1 + hobbies.length) % hobbies.length);
  };

  const handleNextSkill = () => {
    setCurrentSkill((prev) => (prev + 1) % skills.length);
  };

  const handlePreviousSkill = () => {
    setCurrentSkill((prev) => (prev - 1 + skills.length) % skills.length);
  };

  return (
    <div className="profile-container">
      <div className="header">
        {/* Profile Image */}
        <img src={profileImage} alt="Profile" className="profile-image" />
        <h1>Jan Nicolai C. Bobis</h1>
        <p>2nd-year college student pursuing BS in Information Systems.</p>
      </div>

      <div className="tabs">
        <button
          onClick={() => setActiveTab('about')}
          className={activeTab === 'about' ? 'active' : ''}
        >
          About Me
        </button>
        <button
          onClick={() => setActiveTab('hobbies')}
          className={activeTab === 'hobbies' ? 'active' : ''}
        >
          Hobbies
        </button>
        <button
          onClick={() => setActiveTab('skills')}
          className={activeTab === 'skills' ? 'active' : ''}
        >
          Skills
        </button>
        <button
          onClick={() => setActiveTab('goals')}
          className={activeTab === 'goals' ? 'active' : ''}
        >
          Goals
        </button>
        <button
          onClick={() => setActiveTab('contact')}
          className={activeTab === 'contact' ? 'active' : ''}
        >
          Contact
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'about' && (
          <div>
            <h2>About Me</h2>
            <p>
              I'm passionate about learning new skills and improving my personal and professional growth.
            </p>
          </div>
        )}

        {activeTab === 'hobbies' && (
          <div>
            <h2>Hobbies</h2>
            <div className="carousel">
              <button onClick={handlePreviousHobby}>Previous</button>
              <p>{hobbies[currentHobby]}</p>
              <button onClick={handleNextHobby}>Next</button>
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div>
            <h2>Skills</h2>
            <div className="carousel">
              <button onClick={handlePreviousSkill}>Previous</button>
              <p>{skills[currentSkill]}</p>
              <button onClick={handleNextSkill}>Next</button>
            </div>
          </div>
        )}

        {activeTab === 'goals' && (
          <div>
            <h2>Goals</h2>
            <p>
              My short-term goal is to excel in my current course and learn as much as I can about programming.
              My long-term goal is to become a skilled software developer and work on innovative projects that make an impact.
            </p>
          </div>
        )}

        {activeTab === 'contact' && (
          <div>
            <h2>Contact</h2>
            <p>Email: jnbobis@gbox.ncf.edu.ph</p>
            <p>Phone: 0998 453 4867</p>
            <p>
              Facebook:{' '}
              <a
                href="https://www.facebook.com/profile.php?id=100014323635248"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jan Nicolai Bobis
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
