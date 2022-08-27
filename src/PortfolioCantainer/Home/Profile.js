import React from "react";
import Typical from "react-typical";

export default function Profile() {
  return (
    <div>
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz">
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>

            <div className="profile-details-name">
              <span className="primary-text">
                {" "}
                Hello, I'M<span className="highlighted-text">Ehiedu</span>
              </span>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                {" "}
                <h1>
                  {" "}
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Ethusiastic Dev",
                      1000,
                      "full Stack Dev",
                      1000,
                      "MERN Dev",
                      1000,
                      "Cross Platform Dev",
                      100,
                      "React/React Native Dev",
                      1000,
                    ]}
                  />
                </h1>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
