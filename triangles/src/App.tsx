import { useState } from "react";
import Area from "./components/Area";
import Footer from "./components/footer";
import Hypotenuse from "./components/Hypotenuse";
import IsTriangle from "./components/IsTriangle";
import { Quiz } from "./components/Quiz";
import { Button, CenteredDiv, Container } from "./UI_KIT";

const data = [
  {
    name: "Is Triangle ?",
    component: <IsTriangle />,
  },
  {
    name: "Triangle Quiz",
    component: <Quiz />,
  },
  {
    name: "Hypotenuse",
    component: <Hypotenuse />,
  },
  {
    name: "Area of triangle",
    component: <Area />,
  },
];

function App() {
  const [component, setComponent] = useState<JSX.Element | null>(null);
  return (
    <>
      <Container>
        <CenteredDiv>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
            {data.map((item) => (
              <Button onClick={() => setComponent(item.component)}>{item.name}</Button>
            ))}
          </div>
        </CenteredDiv>
        <CenteredDiv style={{ margin: "5rem 0" }}>
          {component ? <div>{component} </div> : <h1>Click on any button to see the component</h1>}
        </CenteredDiv>
        <Footer />
      </Container>
    </>
  );
}

export default App;
