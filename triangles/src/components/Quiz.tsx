import React, { FormEvent, useRef, useState } from "react";
import { Button, CenteredDiv, Li, Result, Title, Ul } from "../UI_KIT";

const questions = [
  {
    question: "What is the third angle of a triangle with angles 60 and 30?",
    answer: "90",
    options: ["30", "90", "120"],
  },
  {
    question: "What is the hypotenuse of a triangle with sides 3 and 4?",
    answer: "5",
    options: ["5", "6", "7"],
  },
  {
    question: "What is the type of a triangle with sides 3, 3 and 3?",
    answer: "equilateral",
    options: ["equilateral", "isosceles", "scalene"],
  },
  {
    question: "What is the area of a triangle with base 10 and height 25?",
    answer: "250",
    options: ["250", "500", "1000"],
  },
  {
    question: "What is the type of a triangle with angles 60, 60 and 60?",
    answer: "all",
    options: ["all", "acute", "obtuse"],
  },
];

export function Quiz() {
  const form = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let tempscore = 0;
    // @ts-ignore
    let data = new FormData(form.current);
    for (const [key, value] of data) {
      console.log(key, value);
      for (const question of questions) {
        console.log(question.answer);
        if (question.answer === value) {
          tempscore++;
        }
      }
    }
    alert("Your score is " + tempscore);
  };

  return (
    <>
      <Title>It's quiz time</Title>
      <div>
        <form ref={form} id="formElement" onSubmit={(e) => handleSubmit(e)}>
          <CenteredDiv direction="column">
            {questions.map(({ question, options }, index) => {
              return (
                <div key={`${index}a`}>
                  <h2>{question}</h2>

                  <Ul>
                    {options.map((option, index) => {
                      return (
                        <Li key={`${index}b`}>
                          <label>
                            <input type="radio" name={question} required value={option} />
                            &nbsp; {option}
                          </label>
                        </Li>
                      );
                    })}
                  </Ul>
                </div>
              );
            })}
          </CenteredDiv>

          <CenteredDiv>
            <Button>Get your score</Button>
          </CenteredDiv>
        </form>
      </div>
    </>
  );
}
