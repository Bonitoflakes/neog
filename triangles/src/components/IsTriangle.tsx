import { FormEvent, useState } from "react";
import { Button, CenteredDiv, Input, Label, Result, Title } from "../UI_KIT";
import Confetti from "react-confetti";

const IsTriangle = () => {
  const [angle1, setAngle1] = useState("");
  const [angle2, setAngle2] = useState("");
  const [angle3, setAngle3] = useState("");
  const [isTriangle, setIsTriangle] = useState(false);

  const checkTriangle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Number(angle1) + Number(angle2) + Number(angle3) === 180) {
      setIsTriangle(true);
    } else {
      setIsTriangle(false);
      alert("Bad luck, ain't a triangle");
    }
  };

  return (
    <>
      <Title>Is Triangle ?</Title>

      <form onSubmit={(e) => checkTriangle(e)}>
        <div>
          <Label htmlFor="angle1">Enter angle a</Label>
          <Input
            name="angle1"
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            min={1}
            title="Non-negative numbers only"
            value={angle1}
            required
            onChange={(e) => setAngle1(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="angle2">Enter angle b</Label>
          <Input
            name="angle2"
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            min={1}
            title="Non-negative numbers only"
            value={angle2}
            required
            onChange={(e) => setAngle2(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="angle3">Enter angle c</Label>
          <Input
            name="angle3"
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            min={1}
            title="Non-negative numbers only"
            value={angle3}
            required
            onChange={(e) => setAngle3(e.target.value)}
          />
        </div>

        <CenteredDiv>
          <Button>Check</Button>
        </CenteredDiv>
      </form>

      {isTriangle && (
        <>
          <Confetti />
          <Result>Yay! It's a triangle 🔺</Result>
        </>
      )}
    </>
  );
};

export default IsTriangle;
