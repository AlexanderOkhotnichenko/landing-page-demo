import React from "react";
import { Main } from "./components/Main";
import { Container } from "./components/Container";
import { Catallog } from "./components/Catallog";
import { Card } from "./components/Card";
import { cards } from "./cards";
import { Exchanges } from "./components/Exchanges";

function App() {
  return (
    <Main>
      <Container>
        <Catallog>
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </Catallog>
        <Exchanges />
      </Container>
    </Main>
  );
}

export default App;
