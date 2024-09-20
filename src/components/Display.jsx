import styled from "styled-components";
import TipAmount from "./TipAmount";
import Total from "./Total";

const DisplayBg = styled.div`
    width: 415px;
    height: 420px;
    background-color: var(--very-dark-cyan);
    border-radius: 15px;
    position: absolute;
    right: 30px;
    bottom: 30px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
`

const Button = styled.button`
    background-color: var(--strong-cyan);
    text-transform: uppercase;
    color: var(--very-dark-cyan);
    width: 333px;
    height: 50px;
    position: absolute;
    bottom: 40px;
    left: 40px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    letter-spacing: 1px;

    &:hover{
        background-color: #9fe8df;
        color: var(--very-dark-cyan);
        cursor: pointer;
    }
`

const Display = ({tipamt, total, setBill, setNumber, setTipAmt, setTotal})=>{

    const handleReset = ()=>{
        setBill("")
        setNumber("")
        setTipAmt("$0.00")
        setTotal("$0.00")
    }

    return(
        <DisplayBg>
            <TipAmount
            tipamt = {tipamt}
            />
            <Total
            total = {total}
            />
            <Button onClick={handleReset}>Reset</Button>
        </DisplayBg>
    )
}

export default Display