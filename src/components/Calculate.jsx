import styled from "styled-components"
import Bill from "./Bill"
import Tip from "./Tip"
import People from "./People"

const CalculateBg = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 40px;
`

const Calculate = ({bill, setBill, tip, number,setNumber, setTipAmt, setTotal})=>{
    return(
        <CalculateBg>
          <Bill
          bill = {bill}
          setBill = {setBill}
          />
          <Tip
          bill= {bill}
          tip = {tip}
          number = {number}
          setTipAmt = {setTipAmt}
          setTotal = {setTotal}
          />
          <People
          number = {number}
          setNumber = {setNumber}
          />
        </CalculateBg>
    )
}

export default Calculate