import { FormEvent, useState } from "react";
import { Button, CenteredDiv, Input, Label, Result, Title } from "../UI_KIT";
import Confetti from "react-confetti";

const Area = () => {
  const [side1, setSide1] = useState("");
  const [side2, setSide2] = useState("");
  const [side3, setSide3] = useState("");
  const [area, setArea] = useState<null | number>(null);

  const calculateArea = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const semiPerimeter = (Number(side1) + Number(side2) + Number(side3)) / 2;

    let area = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - Number(side1)) *
        (semiPerimeter - Number(side2)) *
        (semiPerimeter - Number(side3))
    );

    setArea(area);
  };

  return (
    <>
      <Title>Area of a Triangle</Title>

      <form onSubmit={(e) => calculateArea(e)}>
        <div>
          <Label htmlFor="side1">Enter side 1</Label>
          <Input
            name="side1"
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            min={1}
            title="Non-negative numbers only"
            value={side1}
            required
            onChange={(e) => setSide1(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="side2">Enter side 2</Label>
          <Input
            name="side2"
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            min={1}
            title="Non-negative numbers only"
            value={side2}
            required
            onChange={(e) => setSide2(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="side3">Enter side 3</Label>
          <Input
            name="side3"
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            min={1}
            title="Non-negative numbers only"
            value={side3}
            required
            onChange={(e) => setSide3(e.target.value)}
          />
        </div>

        <CenteredDiv>
          <Button>Find Area</Button>
        </CenteredDiv>
      </form>

      {area && (
        <>
          <Confetti />
          <Result>The area of the 🔺: {area}</Result>
        </>
      )}
    </>
  );
};

export default Area;
