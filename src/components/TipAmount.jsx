import styled from "styled-components";

const TipAmountBg = styled.div`
    display: flex;
    column-gap: 2rem;
    position: relative;
    align-items: center;

`
const TitleBody = styled.div`
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
    /* height: 30px; */
    background-color: var(--very-dark-cyan);
    color: var(--strong-cyan);
    text-align: right;
    position: absolute;
    right: 6%;
    font-size: 40px;
    width: 150px;
    text-overflow: clip;
`

const TipAmount = ({tipamt})=>{

    return(
    <TipAmountBg>
        <TitleBody>
            <TitleOne>Tip Amount</TitleOne>
            <TitleTwo>/ person</TitleTwo>
        </TitleBody>
        <Amount>{tipamt}</Amount>
    </TipAmountBg>
    )
}

export default TipAmount