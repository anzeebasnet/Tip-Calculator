import styled from "styled-components"
import Error from "./Error"
import { useState } from "react"

const PeopleBody = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 15px;
`

const TitleBody = styled.div`
    display: flex;
    column-gap: 4.5rem;
`

const Title = styled.p`
    color: var(--dark-grayish-cyan);
    font-size: 15px;
`

const Input = styled.input`
    width: 380px;
    height: 45px;
    background-color: var(--very-light-grayish-cyan);
    border: 1px solid var(--very-light-grayish-cyan);
    border-radius: 5px;
    text-align: right;
    padding-right: 20px;
    outline: none;
    
    &:hover{
        cursor: pointer;
    }

    &:focus{
        border: 2.5px solid var(--strong-cyan);
    }
`

const People = ({number, setNumber})=>{

    const[error, setError] = useState("")

    const handleError = ()=>{
        setError(null)

        if(number==0){
            setError("Can't be zero")
        }
        console.log(error)
    }

    return(
        <PeopleBody>
            <TitleBody>
                <Title>Number of People</Title>
                <Error>{error}</Error>
            </TitleBody>
            <Input
            type="number"
            value={number}
            onChange={(e)=> setNumber(e.target.value)}
            onInput={handleError}
            />
        </PeopleBody>
    )
}

export default People