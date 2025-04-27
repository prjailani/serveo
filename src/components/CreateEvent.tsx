import React from 'react';
import '../styles/createevent.css';

const CreateEvent: React.FC = () => {
  return (
    <div>
      <aside className="sidebar">
        <div className="logo">
          <img src="./serveologo.svg" alt="Logo" />
        </div>
        <nav className="nav-links">
          {[
            { icon: "home", label: "Home" },
            { icon: "dashboard", label: "Dashboard" },
            { icon: "profile", label: "Profile" },
            { icon: "messages", label: "Messages" },
            { icon: "tasks", label: "Tasks" },
            { icon: "settings", label: "Settings" },
            { icon: "notifications", label: "Notifications" },
            { icon: "calendar", label: "Calendar" },
            { icon: "reports", label: "Reports" },
            { icon: "files", label: "Files" },
            { icon: "help", label: "Help" },
            { icon: "team", label: "Team" },
            { icon: "analytics", label: "Analytics" },
            { icon: "logout", label: "Logout" }
          ].map((item, index) => (
            <a key={index} href="#" className={`nav-item ${item.label === "Home" ? 'active' : ''}`}>
              <img src={`icons/${item.icon}.svg`} alt={item.label} />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </aside>

      <div className="topbar">
        <h2>Howdy Orion's Reach</h2>
      </div>

      <div className="eventform">
        <h3>Create an Event/ Opening for Volunteer</h3>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Event Title" />
            <input type="text" placeholder="Skills Required (Separate it with comma)" />
          </div>

          <div className="form-group">
            <div>
              <label>
                Upload Cover Picture
                <input type="file" />
              </label>
            </div>
            <div>
              <input type="text" placeholder="Event Description" />
            </div>
          </div>

          <div className="form-group">
            <select>
              <option>Education</option>
              <option>Healthcare</option>
              <option>Environmental Sustainability</option>
              <option>Disaster Relief</option>
            </select>
            <select>
              <option>On-Site</option>
              <option>Remote</option>
              <option>Hybrid</option>
            </select>
            <input type="number" placeholder="Location Longitude" />
            <input type="number" placeholder="Location Latitude" />
          </div>

          <div className="form-group">
            <input type="datetime-local" placeholder="Start Date and Time" />
            <input type="datetime-local" placeholder="End Date and Time" />
            <select>
              <option>GMT +5:30</option>
            </select>
          </div>

          <div className="form-group">
            <input type="number" placeholder="Age Requirement" />
            <input type="number" placeholder="No. of Volunteers Needed" />
            <input type="number" placeholder="Reputation Points" />
          </div>

          <div className="form-group">
            {[
              { label: 'Certificate Available' },
              { label: 'Pre Learning Module' },
              { label: 'Allow Squad Participation' }
            ].map((item, index) => (
              <div key={index}>
                <p>{item.label}</p>
                <label className="switch">
                  <input type="checkbox" id={`toggleSwitch-${index}`} />
                  <span className="slider"></span>
                </label>
              </div>
            ))}
          </div>

          <div className="form-group">
            <label>
              Pre-learning Videos
              <input type="file" />
            </label>
            <label>
              Pre-learning Materials
              <input type="file" />
            </label>
          </div>

          <div className="form-group">
            <button type="button">Save as Draft</button>
            <button type="button">Preview Event Page</button>
            <button type="submit" className="submitbutton">PUBLISH NOW</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
