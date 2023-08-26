import './App.css';
import Cards from './components/Cards.jsx';
import { useState, useEffect } from 'react';
import axios from "axios";
import Nav from './components/Nav';
import { Route, Routes, useNavigate } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import ErrorPage from './components/ErrorPage';
import Form from './components/Form';

function App() {

   const navigate = useNavigate()
   const [access, setAccess] = useState(false);
   const EMAIL = "juanmpaola25@gmail.com";
   const PASSWORD = "asdasd123";

   function login(data) {
      if (data.email === EMAIL && data.password === PASSWORD) {
         setAccess(true)
         navigate('/home')
      }

   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   const [characters, setCharacters] = useState([])

   function onClose(id) {
      let filteredCharacters = characters.filter(
         (character) => character.id !== Number(id)
      );

      setCharacters(filteredCharacters)
   }


   function searchId(id){
      for (let i = 0; i < characters.length ; i++){
         if (characters[i].id == id) return true
      }
      return false
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
      if (id > 826) {
         return window.alert('¡No hay personajes con este ID!')
      } else if (isNaN(id)) {
         return window.alert(' Solo se pueden agregar personajes con numeros ID')
      } else if (searchId(id)){
         return window.alert(' Ya esta agregado este personaje ')
      }
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('Ingresa un ID para poder agregar un personaje.');
         }
      });
   }

   return (<>

      <div className='App'>

         <Nav onSearch={onSearch} />

         <Routes>

            <Route path='/' element={<Form login={login} />} />
            <Route path='/about' element={<About />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path="*" element={<ErrorPage />} />

         </Routes>

      </div>
   </>
   );
}

export default App;
