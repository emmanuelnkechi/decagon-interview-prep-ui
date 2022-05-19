import styled from "styled-components";
import Button from "../../../common/Button";

const Platform = () => {
  return (
    <StyledPlatform>
      <div className="platform">
        <div className="platform-first">
          <img
            className="platform-first__small"
            src="./images/small-ellipse.png"
            alt="ellipse"
          />
          <img
            className="platform-first__big"
            src="./images/medium-ellipse.png"
            alt="ellipse"
          />
          <img
            className="platform-first__Brectangle"
            src="./images/big-rectangle.png"
            alt="ellipse"
          />
          <img
            className="platform-first__pic"
            src="./images/platform-one.svg"
            alt="user"
          />
        </div>
        <div className="platform-second">
          <h4>A One-Stop Platform</h4>
          <p>
            You connect with TalentCo We communicate with dozens of companies,
            platforms and hundreds of recruiters to single out the best
            opportunity for you!
          </p>
          <Button
            content="Get Started"
            outline={false}
            size="small"
            bgColor="#FFBA49"
          />
        </div>
      </div>
      <div className="process">
        <div className="process-hidden"></div>
        <div className="process-first">
          <h4>Talent Centric Process, Putting you FIRST!</h4>
          <p>
            TalentCo collaborates with companies who uphold the International
            standard hiring process. We ensure that good and structured career
            growth experiences are adopted for you.
          </p>
          <Button
            content="Get Started"
            outline={false}
            size="small"
            bgColor="#FFBA49"
          />
        </div>
        <div className="process-second">
          <img
            className="process-second__small"
            src="./images/small-ellipse.png"
            alt="ellipse"
          />
          <img
            className="process-second__pic"
            src="./images/platform-two.svg"
            alt="user"
          />
          <img
            className="process-second__medium"
            src="./images/medium-ellipse.png"
            alt="ellipse"
          />
          <img
            className="process-second__Mrectangle"
            src="./images/small-rectangle.png"
            alt="ellipse"
          />
        </div>
      </div>
    </StyledPlatform>
  );
};

const StyledPlatform = styled.div`
  background-image: url("./images/platform-background.png");
  color: #fff;
  padding: 1rem 6rem;
  margin-top: 7rem;

  .platform {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 2fr 2fr;
    gap: 2rem;
    &-first {
      display: flex;
      justify-content: right;
      position: relative;
      &__pic {
        width: 70%;
        height: auto;
        margin-top: -5rem;
        z-index: 1;
      }
      &__big {
        position: absolute;
        margin-right: 14rem;
        margin-top: 10rem;
        width: 40%;
        height: auto;
      }
      &__Brectangle {
        margin-right: 18rem;
        position: absolute;
        width: 30%;
        height: auto;
        z-index: 1;
        margin-top: 14rem;
      }
      &__small {
        margin-right: 25rem;
        position: absolute;
        width: 10%;
        height: auto;
        margin-top: 5rem;
      }
    }

    &-second {
      h4 {
        width: 25%;
        font-weight: 800;
        font-size: 1.5rem;
      }
      p {
        width: 42%;
      }
    }
  }

  .process {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 1rem;

    &-first {
      h4 {
        font-weight: 800;
        width: 90%;
        font-size: 1.5rem;
      }
    }

    &-second {
      position: relative;
      &__pic {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: auto;
        margin-bottom: -17rem;
      }
      &__small {
        margin-left: 5rem;
        position: absolute;
        margin-bottom: -7rem;
        z-index: 5;
        width: 20%;
        height: auto;
      }
      &__medium {
        position: absolute;
        margin-left: 11rem;
        margin-top: 0.5rem;
        width: 60%;
        height: auto;
      }
      &__Mrectangle {
        position: absolute;
        margin-left: 12rem;
        margin-top: 10rem;
        width: 60%;
        height: auto;
      }
    }
  }

  @media only screen and (min-width: 280px) and (max-width: 767px) {
    padding: 1rem 2rem;
    .platform {
      display: grid;
      grid-template-columns: 1fr;

      &-first {
        &__pic {
          display: none;
        }
        &__big {
          display: none;
        }
        &__Brectangle {
          display: none;
        }
        &__small {
          display: none;
        }
      }

      &-second {
        h4 {
          width: 100%;
          font-weight: 800;
          font-size: 1.5rem;
        }
        p {
          width: 100%;
        }
      }
    }
    .process {
      display: grid;
      grid-template-columns: 1fr;

      &-second {
        position: relative;
        &__pic {
          display: none;
        }
        &__small {
          display: none;
        }
        &__medium {
          display: none;
        }
        &__Mrectangle {
          display: none;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    /* padding: 1rem 2rem; */
    .platform {
      display: grid;
      grid-template-columns: 1fr 1fr;

      &-first {
        &__pic {
          width: 90%;
          height: auto;
          margin-top: 0rem;
          z-index: 1;
        }
        &__big {
          display: none;
        }
        &__Brectangle {
          display: none;
        }
        &__small {
          display: none;
        }
      }

      &-second {
        h4 {
          width: 100%;
          font-weight: 800;
          font-size: 1.5rem;
        }
        p {
          width: 100%;
        }
      }
    }
    .process {
      display: grid;
      grid-template-columns: 1fr 1fr;
      &-hidden {
        display: none;
      }
      &-second {
        &__pic {
          width: 80%;
          height: auto;
        }
        &__small {
          display: none;
        }
        &__medium {
          display: none;
        }
        &__Mrectangle {
          display: none;
        }
      }
    }
  }
`;

export default Platform;
