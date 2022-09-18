import { FormEvent, useState } from "react";
import { Button, CenteredDiv, Input, Label, Result, Title } from "../UI_KIT";
import Confetti from "react-confetti";

const Hypotenuse = () => {
  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");
  const [hypotenuse, setHypotenuse] = useState<null | number>(null);

  const calculateHypotenuse = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let hypotenuse = Math.sqrt(Math.pow(Number(base), 2) + Math.pow(Number(height), 2));
    setHypotenuse(hypotenuse);
  };

  return (
    <>
      <Title>Hypotenuse of a Triangle</Title>

      <form onSubmit={(e) => calculateHypotenuse(e)}>
        <div>
          <Label htmlFor="base">Enter base value (a) </Label>
          <Input
            name="base"
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            min={1}
            title="Non-negative numbers only"
            value={base}
            required
            onChange={(e) => setBase(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="height">Enter height value (b)</Label>
          <Input
            name="height"
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            min={1}
            title="Non-negative numbers only"
            value={height}
            required
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <CenteredDiv>
          <Button>Calculate Hypotenuse</Button>
        </CenteredDiv>
      </form>

      {hypotenuse && (
        <>
          <Confetti />
          <Result>The Hypotenuse of the 🔺: {hypotenuse}</Result>
        </>
      )}
    </>
  );
};

export default Hypotenuse;
