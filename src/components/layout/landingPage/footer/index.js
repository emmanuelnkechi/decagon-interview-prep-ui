import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer">
        <div className="footer-first">
          <img src="./images/logo-transparent.png" alt="logo" />
        </div>
        <div className="footer-second">
          <h4>QUICK LINKS</h4>
          <Link to="/">For Companies</Link>
          <Link to="/">For Talents</Link>
          <Link to="/">Job Board</Link>
        </div>
        <div className="footer-third">
          <h4>COMPANY</h4>
          <Link to="/">About Us </Link>
          <Link to="/">Blog</Link>
          <Link to="/">Testimonials</Link>
        </div>
        <div className="footer-fourth">
          <h4>SUPPORT</h4>
          <Link to="/">Contact Us </Link>
          <Link to="/">Help Center</Link>
          <Link to="/">FAQs</Link>
        </div>
      </div>

      <div className="copyright">© 2022 — Talentco. All Rights Reserved.</div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 4rem 0rem 1.5rem 8rem;
  color: #fff;
  background: #3789ff;
  position: relative;
  .footer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
    &-first {
      display: flex;
      flex-direction: column;
      img{
          width:60%;
          height: auto;
          margin-top: 2rem;
      }
    }
    &-second {
      display: flex;
      flex-direction: column;

      h4 {
        margin-bottom: 0rem;
      }
      a {
        text-decoration: none;
        color: #fff;
        margin-top: 1rem;
      }
    }
    &-third {
      display: flex;
      flex-direction: column;

      h4 {
        margin-bottom: 0rem;
      }
      a {
        text-decoration: none;
        color: #fff;
        margin-top: 1rem;
      }
    }
    &-fourth {
      display: flex;
      flex-direction: column;

      h4 {
        margin-bottom: 0rem;
      }
      a {
        text-decoration: none;
        color: #fff;
        margin-top: 1rem;
      }
    }
  }
  .copyright {
    margin-top: 5rem;
    text-align: center;
    font-weight: 500;
  }

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    padding: 1rem 0rem 1rem 2rem;
    .footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 3rem 0rem 3rem 3rem;
  }
`;

export default Footer;
