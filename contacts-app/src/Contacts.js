import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import { MainContainer, Header, SearchBar, ContactList, ContactsContainer } from './Contacts.styled';


const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  //const [search, setSearch] = useState('');


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setContacts(response.data))
      .catch(error => console.log('Error fetching contacts data:', error));
  }, []);

  // search
  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(search.toLowerCase())
  // );

return (
  <MainContainer>
    {/* <Headers> Contacts </Headers> */}
    {/* <SearchContainer>Search</SearchContainer> */}
    <Header> Contacts </Header>
    <ContactsContainer>
      
      <ContactList>
        {contacts.map(contact => (
            <Card
              key={contact.id}
              name={contact.name}
              username={contact.username}
              email={contact.email}
              phone={contact.phone}
            />
          ))}
      </ContactList>    
    </ContactsContainer>
  </MainContainer>
);
};

export default Contacts;