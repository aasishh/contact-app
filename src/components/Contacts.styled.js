import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FF7F50; 
  padding: 20px;
`;

export const Header = styled.h1`
  text-align: center;
  color: White;
  font-size: 5.65em;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 50px;
  
  @media (max-width: 786px) {
    font-size: 3.75em;
  }

  @media (max-width: 576px) {
    font-size: 2.69em;
  }
`;


export const ContactsContainer = styled.div`
  display: flex;
  width: 65%;
  height: 93.5vh;
  justify-content: center;
  align-items: center;
  background-color: #E8E8E8;
  border-radius: 2.55rem;
 
  box-shadow: 0px 155px 62px rgba(0, 0, 0, 0.01), 0px 87px 52px rgba(0, 0, 0, 0.05), 0px 39px 39px rgba(0, 0, 0, 0.09), 0px 10px 21px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
   overflow-y: auto;
  
  @media (max-width: 992px) {
     width: 70%;
  }

  @media (max-width: 786px) {
    width: 85%;
  }

  @media (max-width: 576px) {
    width: 90%;
  }

`;


export const ContactList = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
 
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
