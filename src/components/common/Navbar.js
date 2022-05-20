import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const mobileToggle = () => {
    setToggle(!toggle)
  };
  return (
    <StyledNav toggle={toggle}>
      <div>
        <Link to="/">
          <img
            className="logo"
            src="./images/Talent-logo.svg"
            alt="company-logo"
          />
        </Link>
      </div>
      <div class="icon" onClick={mobileToggle}>
        <HiMenu />
      </div>
      <ul className="listing">
        <li className="listing-item">
          <Link className="listing-item__links" to="/">
            About Us
          </Link>
        </li>
        <li className="listing-item">
          <Link className="listing-item__links" to="/">
            For Companies
          </Link>
        </li>
        <li className="listing-item">
          <Link className="listing-item__links" to="/">
            For Talents
          </Link>
        </li>
        <li className="listing-item">
          <Link className="listing-item__links" to="/">
            Job Board
          </Link>
        </li>
        <li className="listing-item">
          <Link className="listing-item__links" href="/">
            Blog
          </Link>
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
  padding: 0.5rem 2rem 0rem 5rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  height: 100%;
  align-items: center;
  gap: 2rem;

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
  .icon {
    display: none;
  }

  @media only screen and (min-width: 280px) and (max-width: 767px) {
      padding: 1rem;
    grid-template-columns: 1fr;
    background: #272d4e;
    color: #ffffff;
    justify-content: left;
    align-items: flex-start;
    position: fixed;
    height: ${({toggle})=>( toggle ? "25rem": "2rem")};
    width: ${({toggle})=>( toggle ? "47%": "10%")};

    .icon {
      display: block;
      top: 1%;
      width: 100%;
      position: absolute;
      left: ${({toggle})=>( toggle ? "90%": "70%")};
      margin-right: auto;
      
    }

    .logo {
      width: 70%;
      height: auto;
    }
    .listing {
      display: ${({toggle})=>( toggle ? "flex": "none")};
      flex-direction: column;
      gap: 1rem;
      &-item{
          text-align: left;
          &__links{
              color: #fff;
          }
      }
      &-item:hover{
          background: #272d4e;
          a{
          color: #fff;
          }
      }

    }
    .nav-form {
    display: ${({toggle})=>( toggle ? "flex": "none")};
      flex-direction: column;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
      padding: 1rem;
      gap:0.8rem;
      grid-template-columns: 2fr 7fr 3fr;
      .logo{
          width: 100%;
          height: auto;
      }
      .listing {
          &-item{
              &__links{
              font-size:0.6rem;
              }
          }
      }
  }
`;

export default Navbar;
