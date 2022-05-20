import style from "styled-components";
import Button from "../../../common/Button";

const Matched = () => {
  return (
    <StyledMatched>
      <div className="matched">
        <h1>Get matched to your dream opportunity</h1>
        <p>
          Save time and Focus your energy in getting one step closer to your
          next best opportunity. Join our talent network now!
        </p>
        <Button
          content="APPLY AS A TALENT"
          outline={false}
          size="medium"
          bgColor="#3789FF"
        />
      </div>

      <div className="matched-people">
        <img src="./images/people.png" alt="people" />
      </div>
    </StyledMatched>
  );
};

const StyledMatched = style.section`
margin-top: 30rem;
padding: 1rem 5rem;
.matched{
    text-align: center;
    h1{
       color: #272D4E; 
       text-align: center;
       font-weight: 600;
       font-size: 2.5rem;
    }
    p{
      color: #94A2B3;
      width: 35%;
      margin:0 auto;
      text-align: center;
      line-height: 1.5rem;
    }
    button{
        margin-top: 2rem;
        margin-bottom: 4rem;
    }
}

.matched-people{
    width: 60%
    margin: 0 auto;
    margin-bottom: -12rem;
   
    text-align: center;
}

@media only screen and (min-width: 280px) and (max-width: 767px) {
    padding: 1rem;
    margin-top: 10rem;
    .matched{
        h1{
            font-size: 1.2rem;
        }
        p{
            width: 100%;
        }
        button{
            margin-bottom: 2rem;
        }
    }
    .matched-people{
        margin-top: 3rem;
      text-align: center;
      margin-bottom: -3rem;
        img{
            width: 70%;
            height: auto;
        }
    }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 2rem;
    margin-top: 23rem;

    .matched{
        p{
            width: 80%;
        }
    }
    .matched-people{
        text-align: center;
        margin-top: 6rem;
        margin-bottom: -7rem;
        img{
            width: 70%;
            height: auto;
        }
    }
}
`;

export default Matched;
