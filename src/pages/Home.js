import styled from "styled-components";
import introImg from "../assets/images/app-intro.png";
import Container from "../components/Container";
import RegistrationForm from '../components/RegistrationForm';

const StyledHome = styled.div`
  img {
    width: 100%;
    margin-bottom: 30px;
  }
  .home-content {
    padding: 0 25px;
    p.large {
      margin-bottom: 25px;
    }
  }
`;

function Home() {
  return (
    <StyledHome>
      <img src={introImg} alt="Example on how the app work" />
      <Container>
        <div class="home-content">
          <h1>Share ride, reduce cost</h1>
          <p className="large">
            Register your route on the map, and we’ll send you matches for people
            taking the same route, so you could share the same ride.
          </p>
          <button>Get started</button>
        </div>

        <RegistrationForm />
      </Container>
    </StyledHome>
  );
}

export default Home;
