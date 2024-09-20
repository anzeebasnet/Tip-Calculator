import styled from "styled-components";

const TipBody = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 15px;
`

const Title = styled.p`
    color: var(--dark-grayish-cyan);
    font-size: 15px;
`
const Buttons = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;

`

const Button = styled.button`
    width: 115px;
    height: 48px;
    background-color: var(--very-dark-cyan);
    color: var(--white);
    border: none;
    border-radius: 5px;
    font-size: 18px;

    
    &:hover{
        background-color: #9fe8df;
        color: var(--very-dark-cyan);
        cursor: pointer;
    }

`
const ButtonCustom = styled.input`
    width: 115px;
    height: 48px;
    background-color: var(--very-light-grayish-cyan);
    color: var(--dark-grayish-cyan);
    border: 2px solid var(--very-light-grayish-cyan);
    border-radius: 5px;
    outline: none;
    font-size: 18px;
    text-align: right;
    caret-color: var(--strong-cyan);
    
    &:hover{
        cursor: pointer;
    }

    &:focus{
        border: 2px solid var(--strong cyan);
    }
`

const Tip = ({bill, tip, number, setTipAmt, setTotal})=>{

    const createTip = (e)=>{
        console.log(e.target.value)
        const tippercent = e.target.value/100
        console.log(bill)
        tip = bill*tippercent
        console.log(tip)
        const tipamount = tip/number
        console.log(tipamount)
        setTipAmt(tipamount)
        createTotal()
    }

    const createTotal = ()=>{
        const totalbill = Number(bill)+Number(tip)
        console.log(totalbill)
        const totalperperson = totalbill/number 
        setTotal(totalperperson)
        console.log(totalperperson)
        
    }


    return(
        <TipBody>        
            <Title>Select Tip %</Title>
              <Buttons>
                <Button
                value={5}
                onClick={createTip}>5%</Button>
                <Button
                value={10}
                onClick={createTip}>10%</Button>
                <Button
                value={15}
                onClick={createTip}>15%</Button>
                <Button
                value={25}
                onClick={createTip}>25%</Button>
                <Button
                value={50}
                onClick={createTip}>50%</Button>
                <ButtonCustom
                type="number"
                placeholder="Custom"
                onChange={createTip}
                />
              </Buttons>
        </TipBody>
    ) 
}

export default Tip