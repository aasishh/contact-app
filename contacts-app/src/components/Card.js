

import React from 'react';
import { CardContainer, ImageContainer, Avatar, Content, Name, Contact } from './Card.styled';
import avatarIcon from "../assets/avatar.jpg";

const Card = ({ name, username, email, phone }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Avatar  src={avatarIcon} alt="Avatar"/>
      </ImageContainer>
      
      <Content>
        <Name>
          {name}
          <p>Username: {username}</p>
        </Name>
        
        <Contact>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
        </Contact>

      </Content>
      
    </CardContainer>
  );
};

export default Card;
