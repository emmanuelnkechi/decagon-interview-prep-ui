import styled from "styled-components";
import Button from "../../../common/Button";
const Header = () => {
  return (
    <StyledHeader>
      <div className="header">
        <div className="header-first">
          <h1 className="header-first_welcome">Welcome to your next growth opportunity.</h1>
          <p className="header-first_message">
            Get connected with full time, freelance and remote jobs that are
            suited just for you and meet your prerequisite.
          </p>
          <div className="header-first_apply">
            <Button
              content="APPLY AS A TALENT"
              outline={false}
              size="medium"
              bgColor="#3789FF"
            />
          </div>
        </div>
        <div className="header-second">
            <img className="header-second_image" src="./images/featured-image.svg" alt="featured-user" />
        </div>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.section`
  padding: 0.5rem 2rem 0.5rem 5rem;
  background: linear-gradient(180deg, #E5EFFF 0%, rgba(229, 239, 255, 0.262661) 83.7%, rgba(229, 239, 255, 0) 100%);
  .header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 2rem;

    &-first{
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;

        &_welcome{
            font-size: 5rem;
            font-weight: 700;
            color: #272D4E;
            margin-bottom: 1.5rem;
        }
        &_message{
            color: #94A2B3;
            font-size: 1.4rem;
        }
        &_apply{
            margin-top: 1rem;
        }
    }

    &-second{
        display: flex;
        justify-content: center;
        &_image{
            width: 100%;
            height: auto;
        }
    }
  }

  @media only screen and (min-width: 280px) and (max-width: 767px) {
    padding: 0.5rem 1rem 0.5rem 2rem;
    .header {
    display: grid;
    grid-template-columns: 1fr;

    &-first{
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;

        &_welcome{
            font-size: 2rem;
            margin-bottom: 1rem;
        }
        &_message{
            font-size: 1rem;
        }
        &_apply{
         text-align: center;
        }
    }
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    .header {
        &-first{
            &_welcome{
                font-size: 1.5rem;
            }
        }
    }
  }
`;

export default Header;
