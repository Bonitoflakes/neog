import styled from "styled-components";
import { useEffect, useState } from "react";
import { Container, Input, Button } from "../../UI_KIT";

type centerDivType = {
  variant: string;
};

const checkLuckyBirthday = (date: string, luckyNumber: number) => {
  let sum = 0;
  for (let i = 0; i < date.length; i++) {
    if (date[i] !== "-") {
      sum += parseInt(date[i]);
    }
  }
  if (sum % luckyNumber === 0) {
    return "Your birthday is lucky!";
  } else {
    return "Your birthday is not lucky!";
  }
};

const App = () => {
  const [date, setDate] = useState<string>("");
  const [luckyNumber, setLuckyNumber] = useState<number>(0);
  const [output, setOutput] = useState<string>("Welcome to Lucky Birthday!");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (date === undefined) {
      return;
    } else if (luckyNumber === 0) {
      return setOutput("Please enter a valid number");
    } else {
      setOutput(checkLuckyBirthday(date, luckyNumber));
    }
  };

  return (
    <>
      <H1>Is your birthday lucky🤔 ?</H1>

      <form>
        <CenteredDiv variant="column">
          <label htmlFor="date">Enter your birthdate</label>
          <Input
            required
            type="date"
            id="dateInput"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </CenteredDiv>

        <CenteredDiv variant="column">
          <label htmlFor="luckyNumber">Enter your lucky number</label>
          <Input
            required
            type="number"
            id="luckyNumber"
            value={luckyNumber}
            onChange={(e) => setLuckyNumber(Number(e.target.value))}
          />
        </CenteredDiv>

        <Button type="submit" onClick={(e) => handleSubmit(e)}>
          Check my luck!!
        </Button>
      </form>
      <H1>{output}</H1>
    </>
  );
};

export default App;

const CenteredDiv = styled.div<centerDivType>`
  display: flex;
  flex-direction: ${(props) => props?.variant || "row"};
  justify-content: center;
  align-items: start;
`;

const H1 = styled.h1`
  font-size: 5rem;
`;

const Label = styled.label`
  font-size: 2.4rem;
`;
