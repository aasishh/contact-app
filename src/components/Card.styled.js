import styled from 'styled-components';


export const CardContainer = styled.div`
  position: relative;
  display: flex;
  background-clip: border-box;
  margin-top: 3rem;
  margin-left: 3rem;
  margin-right: 3rem;
  border-radius:  2em;
  font-weight: 100;
  font-size: 20px;  
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #EE8434;  
  box-shadow: 0 10px 15px -3px rgba(33,150,243,.4),0 4px 6px -4px rgba(33,150,243,.4);
  height: 12rem;
  transition: all 0.8s cubic-bezier(0.15, 0.83, 0.66, 1);  

  &:hover {
   transform: scale(1.03);
  }

  @media (max-width: 992px) {
    margin-top: 2.2rem;
    margin-left: 2.2rem;
    margin-right: 2.2rem;
  }

  @media (max-width: 786px) {
    margin-top: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }

  @media (max-width: 576px) {
    margin-top: 1.1rem;
    margin-left: 1.1rem;
    margin-right: 1.1rem;
  }

`;

export const ImageContainer = styled.div`
  display: flex;
  background-color: white;
  width: 30%;
  justify-content: center;
  align-items: center;  
  border-top-left-radius:  2em;
  border-bottom-left-radius:  2em;
`;

export const Avatar = styled.img`
  width: 250px;
  height: 150px;
  border-radius: 50%;
  object-fit: contain;
  overflow: hidden;
  background-color: white;

`;

export const Content = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  padding: 20px;
  overflow: hidden;
  
  @media (max-width: 786px) {
    padding: 15px;
  }
  @media (max-width: 576px) {
    padding: 10px;
  }
`;

export const Name = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  //color: #332a2a;
  color: #F6F7F6;
  
  p {
    font-size: 0.65em;
    font-weight: 400;
    margin-top: 0;
    padding-top:5px;
  }
  
  @media (max-width: 786px) {
    font-size: 1.1em;
    margin: 0;
    
    p {
      font-size: 0.57em;
      margin-top: 0;
      padding-top: 6px;
    }
  }

  @media (max-width: 576px) {
    font-size: 0.85em;
    margin: 0;
    
    p {
      font-size: 0.60em;
      margin-top: 0;
      padding-top: 4px;
    }
  }
`;

export const Contact = styled.div`
  color: white;
  word-wrap: break-word;
  white-space: normal;
  p:nth-of-type(1) {
    margin-top: 0;   
    margin-bottom: 0;
    padding-top: 9px;
    font-size: 0.89em;
  }

  p:nth-of-type(2) {
    margin-top: 0;
    padding-top: 12px;
    font-size: 0.89em;
  }
  
  @media (max-width: 786px) {
    p:nth-of-type(1) {      
      padding-top: 6px;     
      font-size: 0.79em;
    }

    p:nth-of-type(2) {      
      padding-top: 10px;      
      font-size: 0.79em;
    }
  }
  @media (max-width: 576px) {
    p:nth-of-type(1) {      
      padding-top: 6px;     
      font-size: 0.61em;
    }

    p:nth-of-type(2) {      
      padding-top: 8px;      
      font-size: 0.61em;
    }
  }
`;