import { useState } from "react";
import styled from "styled-components";
import Footer from "./footer";
import { Container, Input, Button } from "./UI_KIT";

type centerDivType = {
  variant: string;
};

const reversedString = (str: string) => {
  return str.split("").reverse().join("");
};

const isPalindrome = (str: string): boolean => {
  const reversed = reversedString(str);
  console.log(`{original,reversed} :`, str, reversed);

  return str === reversed;
};

const getAllDateFormats = (date: string) => {
  const dateInStr = date.split("-");

  console.log(dateInStr); // array type

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
  console.log(listOfPalindromes);

  let flag = false;

  listOfPalindromes.map((item) => {
    if (isPalindrome(item)) {
      return (flag = true);
    }
  });

  return flag;
};

const checkLeapYear = (year: number) => {
  if (year % 400 === 0 || year % 100 !== 0 || year % 4 === 0) {
    return true;
  }
  return false;
};

// const getNextDate = (date: string) => {
//   let counter = 0;
//   let currentDate = new Date(date);
//   let nextDate = currentDate.setDate(currentDate.getDate() + 1);
//   let day = currentDate.getDate() + 1;
//   let month = currentDate.getMonth();
//   let year = currentDate.getFullYear();

//   let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//   if (month === 2) {
//     if (checkLeapYear(year)) {
//       if (day > 29) {
//         day = 1;
//         month = 3;
//       }
//     } else {
//       if (day > 28) {
//         day = 1;
//         month = 3;
//       }
//     }
//   } else {
//     if (day > daysInMonth[month - 1]) {
//       day = 1;
//       month++;
//     }
//   }

//   if (month > 12) {
//     month = 1;
//     year++;
//   }
// };

const _getNextDate = (date: string) => {
  let currentDate = new Date(date);
  let nextDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
  // let nextDate2 = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
  let day = currentDate.getDate() + 1;
  let month = nextDate.getMonth();
  let year = nextDate.getFullYear();

  let obj = {
    currentDate,
    nextDate,
    // nextDate2,
    day,
    month,
    year,
  };

  console.table(obj);
  return `${year}-${month}-${day}`;
};

const checkNextPalindromeDate = (date: string) => {
  let counter = 0;
  let flag = true;

  while (flag) {
    flag = !checkPalindromeForAllDateFormats(_getNextDate(date));
    counter++;
  }
  console.log(counter);
  return counter;
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
      // checkNextPalindromeDate(date);
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

      <Footer />
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
