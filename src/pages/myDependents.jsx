import React from "react";
import "./MyDependents.css";

function MyDependents() {
  return (
    <div className="dependents-page">

    

      <main className="main-content">

        <div className="topbar">
          <span>⌂ &nbsp; Mydependents</span>
          <span className="hamburger">☰</span>
        </div>

        <section className="profile-section">

          <h1>Build Your Profile</h1>

          <p className="description">
            This information will let us know more about your Family
          </p>

          <div className="steps">
            <div className="step active-step">
              <div className="circle"></div>
              <span>Dependents Registration</span>
            </div>

            <div className="line"></div>

            <div className="step">
              <div className="circle"></div>
              <span>Address Information</span>
            </div>

            <div className="line"></div>

            <div className="step">
              <div className="circle"></div>
              <span>Finish</span>
            </div>
          </div>

          <div className="form-card">

            <h2>Let's start with the basic information</h2>

            <p>
              Let us know with name and last name, contacting you at
            </p>

            <div className="form-grid">

              <div>
                <label>First Name</label>
                <input type="text" placeholder="Eg. Michael" />
              </div>

              <div>
                <label>Last Name</label>
                <input type="text" placeholder="Eg. Tomson" />
              </div>

              <div>
                <label>Birth Date</label>
                <div className="birth-date">
                  <select>
                    <option>February</option>
                    <option>January</option>
                    <option>March</option>
                  </select>

                  <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>

                  <select>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                  </select>
                </div>
              </div>

              <div>
                <label>Relation</label>
                <input type="text" placeholder="Eg. Brother, Child" />
              </div>

              <div>
                <label>I'm</label>
                <select>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

            </div>

            <button className="next-btn">NEXT</button>

          </div>

        </section>

      </main>
    </div>
  );
}

export default MyDependents;
