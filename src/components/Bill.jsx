import styled from "styled-components";

const BillBody = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 15px;
`

const Title = styled.p`
    color: var(--dark-grayish-cyan);
    font-size: 15px;
`


const Input = styled.input`
    width: 380px;
    height: 45px;
    background-color: var(--very-light-grayish-cyan);
    border: 3px solid var(--very-light-grayish-cyan);
    border-radius: 5px;
    text-align: right;
    padding-right: 20px;
    outline: none; //this removes the default border of the input field

    &:focus{
        /* box-shadow: 2px 1px 2px 2px var(--strong-cyan); */
        border: 2.5px solid var(--strong-cyan);
    }

    &:hover{
        cursor: pointer;
    }
`
const Bill = ({ bill, setBill })=>{

    return(
        <BillBody>
            <Title>Bill</Title>
            <Input
                type="number"
                value={bill}
                onChange={(e)=>setBill(e.target.value)}
            />
        </BillBody>
    )
}

export default Bill