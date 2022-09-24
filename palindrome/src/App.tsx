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
  console.log(dateInStr); // array type [yyyy,mm,dd]

  const ddmmyyyy = dateInStr.reverse().join("");
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

// const checkLeapYear = (year: number) => {
//   if (year % 400 === 0 || year % 100 !== 0 || year % 4 === 0) {
//     return true;
//   }
//   return false;
// };

const _getNextDate = (date: string) => {
  let userSelectedDate = new Date(date);
  let nextDate = new Date(userSelectedDate.setDate(userSelectedDate.getDate() + 1));
  // let nextDate2 = new Date(userSelectedDate.getTime() + 24 * 60 * 60 * 1000);

  // let day = userSelectedDate.getDate(); // 1-31
  // let month = nextDate.getMonth() + 1; // January is 0!
  // let year = nextDate.getFullYear(); // 4 digit year
  let obj = {
    userSelectedDate,
    nextDate,
    // nextDate2,
    // day,
    // month,
    // year,
  };
  console.table(obj);
  // return `${year}-${month}-${day}`; // yyyy-m-d zero is ignored
  return nextDate.toISOString().slice(0, 10);
};

const checkNextPalindromeDate = (date: string) => {
  let counter = 0;
  let flag = true;

  let nextDate = _getNextDate(date);

  while (flag) {
    flag = !checkPalindromeForAllDateFormats(nextDate);
    if (flag) {
      counter++;
      nextDate = _getNextDate(nextDate);
    }
  }
  console.log(counter);
  return { counter, nextDate };
};

// const getNextDate = (date: string) => {
//   let counter = 0;
//   let userSelectedDate = new Date(date);
//   let nextDate = userSelectedDate.setDate(userSelectedDate.getDate() + 1);
//   let day = userSelectedDate.getDate() + 1;
//   let month = userSelectedDate.getMonth();
//   let year = userSelectedDate.getFullYear();

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

const App = () => {
  const [date, setDate] = useState<string | undefined>("");
  const [output, setOutput] = useState<string>("");
  const [isloading, setIsloading] = useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsloading(true);

    if (date === undefined) {
      return;
    }
    console.log(checkPalindromeForAllDateFormats(date));

    if (checkPalindromeForAllDateFormats(date)) {
      setIsloading(false);
      setOutput("Astonishing, you were born on a Palindrome day");
    } else {
      let { counter, nextDate } = checkNextPalindromeDate(date);
      setIsloading(false);
      setOutput(`The next palindrome date doesn't occur until ${counter} days. It is ${nextDate}`);
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
      <Container style={{ padding: "8rem", textAlign: "center" }}>
        <H1 style={{ fontSize: "3rem" }}>{isloading ? "loading..." : output}</H1>
      </Container>

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
