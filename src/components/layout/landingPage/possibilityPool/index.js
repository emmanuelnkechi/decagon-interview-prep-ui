import styled from "styled-components";
import { Link } from "react-router-dom";

const Pool = () => {
  return (
    <StyledPool>
      <h3 className="title">We open you up to a pool of possibilities.</h3>
      <p className="sub-title">
        Erase completely the stress and uncertainty of applying directly to
        companies, through job boards and dealing with a lot of recruiters.
        TalentCo will link you with opportunities you want and at companies with
        similar interests.
      </p>

      <div className="features">
        <div className="features-first">
          <div className="features-first_container">
            <img src="./images/full-time-rework.png" alt="random user" />
            <div className="features-first_container__fulltime">
              <h5>Full time</h5>
              <p>
                Join top companies anywhere in the world as a full time employee
              </p>
              <Link to="/">Learn More ›</Link>
            </div>
          </div>
        </div>
        <div className="features-second">
          <div className="features-second_container">
            <img src="./images/part-time-rework.png" alt="random user" />

            <div className="features-second_container__partime">
              <h5>Part-time</h5>
              <p>
                Join top companies anywhere in the world as a full time employee
              </p>
              <Link to="/">Learn More ›</Link>
            </div>
          </div>
        </div>
        <div className="features-third">
          <div className="features-third_container">
            <img src="./images/freelance-rework.png" alt="random user" />
            <div className="features-third_container__freelance">
              <h5>Freelance</h5>
              <p>
                Join top companies anywhere in the world as a full time employee
              </p>
              <Link to="/">Learn More ›</Link>
            </div>
          </div>
        </div>
      </div>
    </StyledPool>
  );
};

const StyledPool = styled.section`
  padding: 2rem 4rem 2rem 5rem;
  .title {
    text-align: center;
    font-size: 3.3rem;
    color: #272d4e;
    margin-bottom: 1.8rem;
    font-weight: 500;
  }
  .sub-title {
    text-align: center;
    max-width: 70%;
    margin: 0 auto;
    color: #94a2b3;
    line-height: 1.6rem;
  }
  .features {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    margin-top: 2rem;

    &-first {
      &_container {
        width: 100%;

        img {
          width: 100%;
          height: auto;
        }
        &__fulltime {
          padding: 1rem 0rem 1rem 6rem;
          h5 {
            font-size: 1.8rem;
            margin: 0rem 0rem 0.8rem 0rem;
            color: #272d4e;
          }
          p {
            color: #94a2b3;
            font-size: 1.2rem;
          }
          a {
            text-decoration: none;
            font-size: 1.2rem;
            color: #299ef3;
            font-weight: 600;
            margin-top: 2rem;
          }
        }
      }
    }
    &-second {
      &_container {
        margin-top: 1.8rem;
        width: 100%;

        img {
          width: 100%;
          height: auto;
        }

        &__partime {
          padding: 2rem 0.7rem;
          h5 {
            font-size: 1.8rem;
            margin: 0rem 0rem 0.8rem 0rem;
            color: #272d4e;
          }
          p {
            color: #94a2b3;
            font-size: 1.2rem;
          }
          a {
            text-decoration: none;
            font-size: 1.2rem;
            color: #299ef3;
            font-weight: 600;
            margin-top: 2rem;
          }
        }
      }
    }
    &-third {
      &_container {
        margin-top: 7rem;
        width: 100%;

        img {
          width: 100%;
          height: auto;
        }

        &__freelance {
          padding: 2rem 1rem;
          h5 {
            font-size: 1.8rem;
            margin: 0rem 0rem 0.8rem 0rem;
            color: #272d4e;
          }
          p {
            color: #94a2b3;
            font-size: 1.2rem;
          }
          a {
            text-decoration: none;
            font-size: 1.2rem;
            color: #299ef3;
            font-weight: 600;
            margin-top: 2rem;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 280px) and (max-width: 767px) {
    padding: 1rem;
    .features {
      display: grid;
      grid-template-columns: 1fr;
      gap: 0rem;

      &-first {
        &_container {
            &__fulltime{
                padding: 2rem 0.4rem;
            }
        }
      }

      &-second {
        &_container {
            &__partime{
                padding-top: 0rem;
                padding-bottom: 0rem;
            }
        }
      }

      &-third {
        &_container {
            margin-top: 4rem;
        }
      }
    }
    .title {
      font-size: 1.8rem;
    }
    .sub-title {
      max-width: 100%;
      text-align: center;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    .features {
    &-first {
        &_container {
            &__fulltime{
                padding: 0rem 0.4rem;
            }
        }
      }

      &-second {
        &_container {
            &__partime{
                padding-top: 0rem;
                padding-bottom: 0rem;
            }
        }
      }

  }
}
`;

export default Pool;
