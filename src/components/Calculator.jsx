import styled from "styled-components";
import Display from "./Display";
import Calculate from "./Calculate";
import { useState } from "react";

const CalculatorBg = styled.div`
  width: 920px;
  height: 480px;
  background-color: var(--white);
  border-radius: 23px;
  padding: 40px;
  position: relative;
  display: flex;
  column-gap: 2rem;

  @media (max-width: 680px) {
    flex-direction: column;
    width: 375px;
    height: 790px;
  }
`;
const Calculator = () => {
  const [bill, setBill] = useState("");
  const [number, setNumber] = useState("");
  const [tip, setTip] = useState("");
  const [tipamt, setTipAmt] = useState("$0.00");
  const [total, setTotal] = useState("$0.00");

  return (
    <CalculatorBg>
      <Calculate
        bill={bill}
        setBill={setBill}
        tip={tip}
        setTip={setTip}
        number={number}
        setNumber={setNumber}
        tipamt={tipamt}
        setTipAmt={setTipAmt}
        setTotal={setTotal}
      />
      <Display
        tipamt={tipamt}
        total={total}
        setBill={setBill}
        setNumber={setNumber}
        setTipAmt={setTipAmt}
        setTotal={setTotal}
      />
    </CalculatorBg>
  );
};
export default Calculator;
