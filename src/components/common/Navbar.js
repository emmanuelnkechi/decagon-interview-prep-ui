import styled from "styled-components";
import Button from "./Button";

const Navbar = () => {
  return (
    <StyledNav>
      <div>
        <a href="/">
          <img src="./images/Talent-logo.svg" alt="company-logo" />
        </a>
      </div>
      <ul className="listing">
        <li className="listing-item">
          <a className="listing-item__links" href="/">
            About Us
          </a>
        </li>
        <li className="listing-item">
          <a className="listing-item__links" href="/">
            For Companies
          </a>
        </li>
        <li className="listing-item">
          <a className="listing-item__links" href="/">
            For Talents
          </a>
        </li>
        <li className="listing-item">
          <a className="listing-item__links" href="/">
            Job Board
          </a>
        </li>
        <li className="listing-item">
          <a className="listing-item__links" href="/">
            Blog
          </a>
        </li>
      </ul>

      <form className="nav-form">
        <Button
          content="HIRE A TALENT"
          outline
          size="small"
          bgColor="#3789FF"
        />
        <Button
          content="APPLY AS A TALENT"
          outline={false}
          size="small"
          bgColor="#3789FF"
        />
      </form>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  height: 100%;
  align-items: center;
  gap:2rem;

  .listing {
    display: flex;
    margin: 0rem;
    padding: 0rem;
    width: 100%;
    flex-wrap: wrap;
    margin: 0rem auto;
    gap: 0rem;
    &-item {
      list-style: none;
      text-align: center;
      flex-basis: 20%;
      &__links {
        text-decoration: none;
        color: #272d4e;
        font-weight: 600;
        font-size: 1rem;
      }
    }
  }

  .nav-form {
    justify-self: right;
    display: flex;
    gap: 1rem;
  }

  @media only screen and (min-width: 280px) and (max-width: 767px) {
      display: none;
  }
`;

export default Navbar;
