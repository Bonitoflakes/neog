import styled from "styled-components";
import { ButtonHTMLAttributes, FormEvent, useEffect, useState } from "react";
import { Container, Input, Button } from "./UI_KIT";
import Footer from "./footer";

type centerDivType = {
  variant: string;
};

type COOKIECONSENT = {
  display: boolean;
};

type footerTagProps = {
  isVisible: boolean;
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
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleSubmit = (e: any) => {
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

      <form style={{ margin: "6rem 0" }}>
        <CenteredDiv variant="column">
          <Label htmlFor="date">Enter your birthdate</Label>
          <Input
            required
            type="date"
            id="dateInput"
            value={date}
            onChange={(e: any) => setDate(e.target.value)}
          />
        </CenteredDiv>

        <CenteredDiv variant="column">
          <Label htmlFor="luckyNumber">Enter your lucky number</Label>
          <Input
            required
            type="number"
            id="luckyNumber"
            value={luckyNumber}
            onChange={(e: any) => setLuckyNumber(Number(e.target.value))}
          />
        </CenteredDiv>

        <Button type="submit" onClick={handleSubmit}>
          Check my luck!!
        </Button>
      </form>
      <H1>{output}</H1>

      <PrivacyNotice display={isVisible}>
        <div>
          <h2 style={{ fontSize: "4rem" }}>Privacy Notice</h2>
          <p style={{ fontSize: "2.5rem" }}>We do not store any sort of user data and cookies.</p>
        </div>
        <PrivacyNoticeButton onClick={() => setIsVisible((prev) => !prev)}>CLOSE</PrivacyNoticeButton>
      </PrivacyNotice>

      <Footertag isVisible={isVisible}>
        <Footer />
      </Footertag>
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

const PrivacyNotice = styled.div<COOKIECONSENT>`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: black;
  color: white;
  min-height: 8rem;
  display: ${(props) => (props.display ? "flex" : "none")};
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;
`;

const PrivacyNoticeButton = styled(Button)`
  background: white;
  color: black;
`;

const Footertag = styled.footer<footerTagProps>`
  display: ${(props) => (props.isVisible ? "none" : "flex")};
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 10px;
`;
