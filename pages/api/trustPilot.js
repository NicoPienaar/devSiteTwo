import React, { useState } from "react";
import styled from "styled-components";
import tabs from "../tabs.json";
const Profile = () => {
  const [tabHeading, setTabHeading] = useState("Client");
  const [indexNew, setIndexNew] = useState(0);
  const filter = (test, index) => {
    setTabHeading(test);
    setIndexNew(index);
  };
  return (
    <ProfileContainer>
      <div className="tabs">
        <div className="container">
          <div className="row">
            {tabs.map((test, index) => (
              <div onClick={() => filter(test.Heading, index)}>
                <h1
                  className={index === indexNew ? "heading active" : "heading"}
                >
                  {test.Heading}
                </h1>
              </div>
            ))}
          </div>
          <div className="row">
            {tabs.map((tab, index) =>
              tab.headingDescription
                .filter((test) => test.Tag.includes(tabHeading))
                .map((test, index) => (
                  <div className="card" key={index}>
                    <p>{test.Description}</p>
                    <div className="bottom">
                      <img src={test.Image} alt="" />
                      <div className="name__container">
                        <p>{test.Name}</p>
                        <p>Visit the website</p>
                      </div>
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>
      </div>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  width: 100%;
  height: calc(100vh - 80px);

  .tabs {
    width: 100%;

    .container {
      .row {
        display: flex;
        align-items: center;
        padding: 1rem;

        .heading {
          margin: 0 1rem;
          font-weight: 300;
          color: #fa2356;
          cursor: pointer;
        }

        .heading.active {
          font-weight: bold;
        }
      }

      .card {
        width: 300px;
        height: 300px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        padding: 1rem;
        border-radius: 10px;
        margin: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .bottom {
          display: flex;
          align-items: center;
          img {
            width: 60px;
            height: 60px;
          }

          .name__container {
            margin-left: 1rem;

            p {
              font-weight: bold;
            }
          }
        }
      }
    }
  }
`;
export default Profile;
