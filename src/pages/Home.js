import styled from "styled-components";
import introImg from "../assets/images/app-intro.png";
import Container from "../components/Container";

const StyledHome = styled.div`
  img {
    width: 100%;
  }
`;

function Home() {
  return (
    <StyledHome>
      <img src={introImg} alt="Example on how the app work" />
      <Container>
        <h1>Share ride, reduce cost</h1>
        <p class="large">
          Register your route on the map, and we’ll send you matches for people
          taking the same route, so you could share the same ride.
        </p>
        <button>Get started</button>
      </Container>
    </StyledHome>
  );
}

export default Home;
