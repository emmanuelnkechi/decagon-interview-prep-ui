import styled from "styled-components";

const Talent = () => {
  return (
    <StyledSection>
      <h1 className="title">Trusted by Talents across the GLOBE!</h1>

      <div className="talent">
        <div className="talent-first">
          <img
            className="talent-first__userOne"
            src="./images/user-one.png"
            alt="user-one"
          />
          <img
            className="talent-first__userTwo"
            src="./images/user-two.png"
            alt="user-two"
          />
          <img
            className="talent-first__rectangle"
            src="./images/blue-rectangle.png"
            alt="dotted-rectangle"
          />
          <img
            className="talent-first__userThree"
            src="./images/user-three.png"
            alt="user-three"
          />
        </div>
        <div className="talent-second">
          <div className="arrow">
            <img
              className="arrow-Sarrow"
              src="./images/arrow-two.png"
              alt="arrow"
            />
            <img
              className="arrow-Barrow"
              src="./images/arrow-one.png"
              alt="arrow"
            />
          </div>
          <img
            className="talent-second__testim"
            src="./images/testim.png"
            alt="testimonials"
          />
        </div>
        <div className="talent-third">
          <img
            className="talent-third__userFour"
            src="./images/user-four.png"
            alt="user-one"
          />
          <img
            className="talent-third__userFive"
            src="./images/user-five.png"
            alt="user-two"
          />
          <img
            className="talent-third__rectangle"
            src="./images/blue-rectangle.png"
            alt="dotted-rectangle"
          />
          <img
            className="talent-third__userSix"
            src="./images/user-six.png"
            alt="user-three"
          />
        </div>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: 7rem 5rem 3rem 5rem;
  background: linear-gradient(
    180deg,
    rgba(236, 240, 253, 0) 0%,
    rgba(236, 240, 253, 0.53) 14.32%,
    #ecf0fd 45.83%,
    rgba(236, 240, 253, 0.43) 84.33%,
    rgba(236, 240, 253, 0) 100%
  );

  .title {
    text-align: center;
    color: #272d4e;
    width: 25%;
    margin: 0 auto;
    font-size: 2rem;
    font-weight: 600;
  }
  .arrow {
    display: flex;
    justify-content: right;
    gap: 1rem;
    &-Sarrow {
      cursor: pointer;
    }
    &-Barrow {
      cursor: pointer;
    }
  }

  .talent {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    margin-top: 5rem;

    &-first {
      position: relative;
      &__userOne {
        position: absolute;
        width: 40%;
        height: auto;
        margin-top: -7rem;
        margin-left: 20rem;
      }
      &__userTwo {
        margin-top: 6rem;
        position: absolute;
        width: 30%;
        height: auto;
        margin-left: 0rem;
      }
      &__userThree {
        margin-top: 21rem;
        position: absolute;
        width: 35%;
        height: auto;
        margin-left: 2rem;
      }
      &__rectangle {
        position: absolute;
        width: 100%;
        height: auto;
        margin-top: 19rem;
        margin-left: 12rem;
        z-index: 3;
      }
    }

    &-second {
      &__testim {
        z-index: 5;
        position: absolute;
        width: 40%;
        height: auto;
        margin-top: 1rem;
      }
    }

    &-third {
      position: relative;
      &__userFour {
        position: absolute;
        margin-top: -9rem;
        margin-left: 0rem;
      }
      &__userFive {
        margin-top: 8rem;
        position: absolute;
        margin-left: 4rem;
      }
      &__userSix {
        margin-top: 24rem;
        position: absolute;
        margin-left: -18rem;
      }
      &__rectangle {
        position: absolute;
        width: 100%;
        height: auto;
        margin-top: 5rem;
        margin-left: -20rem;
        z-index: 1;
      }
    }
  }
  @media only screen and (min-width: 280px) and (max-width: 767px) {
    padding: 5rem 2rem;

    .title {
      width: 100%;
      font-size: 1.2rem;
      text-align: center;
      line-height: 2rem;
    }
    .arrow {
      &-Sarrow {
        width: 10%;
        height: auto;
      }
      &-Barrow {
        width: 10%;
        height: auto;
        margin-right: 2rem;
      }
    }
    .talent {
      display: grid;
      grid-template-columns: 1fr;
      margin-top: 3rem;

      &-first {
      display: none;
      }

      &-second {
          position: relative;
        &__testim {
          z-index: 5;
          position: absolute;
          width: 100%;
          height: auto;
          margin-top: 1rem;
        }
      }

      &-third {
      display: none;
      }
    }
  }


  @media only screen and (min-width: 768px) and (max-width: 1024px) {

    .title {
      width: 100%;
      font-size: 1.2rem;
      text-align: center;
    }
    .arrow {
      &-Barrow {
        margin-right:2rem
      }
    }
    .talent {
      display: grid;
      grid-template-columns: 1fr;
      margin-top: 3rem;

      &-first {
        display: none;
      }

      &-second {
          position: relative;
        &__testim {
          z-index: 5;
          position: absolute;
          width: 100%;
          height: auto;
          margin-top: 1rem;
          text-align: center;
        }
      }

      &-third {
       display: none;
      }
    }
  }


  
`;

export default Talent;
