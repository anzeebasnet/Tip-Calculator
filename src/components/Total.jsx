import styled from "styled-components";

const TotalBg = styled.div`
    display: flex;
    column-gap: 3rem;
    position: relative;
    align-items: center;

`
const TotalBody = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 0.2rem;

`

const TitleOne = styled.p`
    color: var(--white);
    font-size: 15px;
    font-weight: 100;
    letter-spacing: 1px;
`
const TitleTwo = styled.p`
    color: var(--grayish-cyan);
    font-size: 10px;
`

const Amount = styled.p`
    width: 150px;
    text-align: right;
    background-color: var(--very-dark-cyan);
    color: var(--strong-cyan);
    position: absolute;
    right: 6%;
    font-size: 40px;
`

const Total = ({total})=>{
    return(
    <TotalBg>
        <TotalBody>
            <TitleOne>Total</TitleOne>
            <TitleTwo>/ person</TitleTwo>
        </TotalBody>
        <Amount>{total}</Amount>
    </TotalBg>
    )
}

export default Total