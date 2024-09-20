import styled from "styled-components";
import Calculator from "./Calculator";

const ContainerBg = styled.div`
  height: 785px;
  background-color: var(--light-grayish-cyan);
  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 680px) {
    /* width: 100%; */
    width: 375px;
    height: 935px;
    padding-left: 30px;
  }
`;
const Logo = styled.div``;
const Container = () => {
  return (
    <>
      <ContainerBg>
        <Logo>
          <img src="images/logo.svg" alt="logo" />
        </Logo>
        <Calculator />
      </ContainerBg>
    </>
  );
};

export default Container;
