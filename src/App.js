import styled from "styled-components";
import NavigationBar from "./NavigationMenu/NavBar";
import Scene from "./3DScene/scene";

function App() {
  const Container = styled.div`
    min-height: 100vh;
    background-color: #f9a;
    min-width: 100vw;
  `;
  return (
    <Container>
      <NavigationBar />
      <Scene />
    </Container>
  );
}

export default App;
