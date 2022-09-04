import { useState } from "react";
import styled from "styled-components";
import { Container, Input, Button } from "./UI_KIT";

type centerDivType = {
  variant: string;
};

const reversedString = (str: string) => {
  return str.split("").reverse().join("");
};

const isPalindrome = (str: string): boolean => {
  const reversed = reversedString(str);
  console.log("reversed", reversed);

  return str === reversed;
};

const getAllDateFormats = (date: string) => {
  const dateInStr = date.split("-");

  console.log(dateInStr);

  const ddmmyyyy = dateInStr.join("");
  const mmddyyyy = dateInStr[1] + dateInStr[2] + dateInStr[0];
  const yyyymmdd = dateInStr[2] + dateInStr[0] + dateInStr[1];
  const ddmmyy = dateInStr[0] + dateInStr[1] + dateInStr[2].slice(-2);
  const mmddyy = dateInStr[1] + dateInStr[2] + dateInStr[0].slice(-2);
  const yymmdd = dateInStr[2].slice(-2) + dateInStr[0] + dateInStr[1];

  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
};

const checkPalindromeForAllDateFormats = (date: string) => {
  const listOfPalindromes = getAllDateFormats(date);

  let flag = false;

  listOfPalindromes.map((item) => {
    console.log("original", item);
    if (isPalindrome(item)) {
      return (flag = true);
    }
  });

  return flag;
};

const App = () => {
  const [date, setDate] = useState<string | undefined>("");
  const [output, setOutput] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (date === undefined) {
      return;
    }
    console.log(checkPalindromeForAllDateFormats(date));

    if (checkPalindromeForAllDateFormats(date)) {
      setOutput("Astonishing, you were born on a Palindrome day");
    } else {
      setOutput("Bad luck");
    }
  };

  return (
    <>
      <H1>Is your birthday a palindrome?</H1>

      <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
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

        <Button type="submit">Show</Button>
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
  margin: 2rem 0;
`;
