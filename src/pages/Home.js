import styled from "styled-components";
import {Link} from 'react-router-dom';
import introImg from "../assets/images/app-intro.png";
import Container from "../components/Container";
import RegistrationForm from "../components/RegistrationForm";

const StyledHome = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  @media (max-width: 767px) {
    display: block;
    .form {
      display: none;
    }
  }
  img {
    width: 100%;
    margin-bottom: 30px;
  }
  .home-content {
    /* padding: 0 25px; */
    p.large {
      margin-bottom: 25px;
    }
    @media (min-width: 767px) {
      button {
        display: none;
      }
    }
  }
`;

function Home() {
  return (
    <Container>
      <StyledHome>
        <div>
          <img src={introImg} alt="Example on how the app work" />
          <div class="home-content">
            <h1>Share ride, reduce cost</h1>
            <p className="large">
              Register your route on the map, and we’ll send you matches for
              people taking the same route, so you could share the same ride.
            </p>
            <Link to="/register" class="button">Get started</Link>
          </div>
        </div>

        <div class="form">
          <RegistrationForm />
        </div>
      </StyledHome>
    </Container>
  );
}

export default Home;
