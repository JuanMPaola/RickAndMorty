import './App.css';
import Cards from './components/Cards/Cards.jsx';
import { useState, useEffect } from 'react';
import axios from "axios";
import Nav from './components/Nav/Nav';
import { Route, Routes, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

function App() {

   const navigate = useNavigate()
   const [access, setAccess] = useState(false);

   const login = async (userData) =>{
      const {email, password} = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      try {
         const {data} = await axios(URL + `?email=${email}&password=${password}`);
         const {access} = data;
         setAccess(data);
         access && navigate('/home');
      } catch (error) {
         alert(error);
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

   function searchId(id) {
      for (let i = 0; i < characters.length; i++) {
         if (characters[i].id == id) return true;
      }
      return false
   }

   /* function randomHandler() {
      let randomId = (Math.random() * 826).toFixed()
      randomId = Number(randomId)

      axios(`http://localhost:3001/rickandmorty/character/${randomId}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
 */

   async function randomHandler(){
      try {
          let memoria = [];
          let randomId = (Math.random()*826).toFixed(); //=> Generamos un id random que este dentro de los 826 => toFixed se queda con la parte positiva
          randomId = Number(randomId); // => toFixed devuelve un String, aca lo pasamos a number
          if(!memoria.includes(randomId)){
              memoria.push(randomId)
              const {data} = await axios(`http://localhost:3001/rickandmorty/character/${randomId}`)
              if(data.name){
                  setCharacters((oldChars)=> [...oldChars, data])
              }else {
                  window.alert('¡No hay personajes con este ID!');
              }
          }
      } catch (error) {
          console.log(error)
      }
  }



   const onSearch = async (id) => {
      if (id > 826) {
         return window.alert('¡No hay personajes con este ID!');
      } else if (isNaN(id)) {
         return window.alert(' Solo se pueden agregar personajes con numeros ID');
      } else if (searchId(id)) {
         return window.alert(" Ya esta agregado este personaje ");
      }
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } 
      } catch (error) {
         window.alert("Ingresa un ID para poder agregar un personaje")
      }
   }



   return (<>

      <div className='App'>

         <Nav onSearch={onSearch} randomHandler={randomHandler} />

         <Routes>

            <Route path='/' element={<Form login={login} />} />
            <Route path='/about' element={<About />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favorites' element={<Favorites onClose={onClose} />} />
            <Route path="*" element={<ErrorPage />} />

         </Routes>

      </div>
   </>
   );
}

export default App;
