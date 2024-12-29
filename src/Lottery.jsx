import { useState } from "react";

export default function Lottery() {
  const randNum = () => Math.floor(Math.random() * 1000) + 1;
  const [getNum, setGetNum] = useState(randNum()); // Initialize with a random number
  const [won, setWon] = useState(false); // Track if the user has won

  const sumOfDigits = (num) => {
    return num
      .toString()
      .split("")
      .reduce((acc, digit) => acc + Number(digit), 0);
  };

  const lottery = () => {
    const newNum = randNum();
    const digitSum = sumOfDigits(newNum);
    setWon(digitSum === 15); // Update win state
    setGetNum(newNum); // Update ticket number
  };

  return (
    <>
      <p>Ticket Number: {getNum}</p>
      <p>{won ? "Congratulations! You won!" : "Try again."}</p>
      <button onClick={lottery}>Get Ticket Number</button>
    </>
  );
}
