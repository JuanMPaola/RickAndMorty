import './App.css';
import Cards from './components/Cards.jsx';
import { useState } from 'react';
import axios from "axios";
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';

function App() {

   const example = {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
         name: 'Earth (C-137)',
         url: 'https://rickandmortyapi.com/api/location/1',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   };

   const [characters, setCharacters] = useState([])

   function onClose(id) {
      let filteredCharacters = characters.filter(
         (character) => character.id !== Number(id)
      );

      setCharacters(filteredCharacters)
   }

   /*
   function randomHandler() {
      let randomId = (Math.random() * 826).toFixed()
      randomId = Number(randomId)

      axios(`https://rickandmortyapi.com/api/character/${randomId}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }*/

   
   

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   return (<>
      <Nav onSearch={onSearch} />
      <div className='App'>
         <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/detail/:id' element={<Detail/>} />
            
         </Routes>
         
      </div>
   </>
   );
}

export default App;
