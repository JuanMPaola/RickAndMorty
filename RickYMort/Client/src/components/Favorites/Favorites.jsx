import React from 'react'
import Cards from '../Cards/Cards'
import { filterCards,orderCards } from '../../redux/actions'
import { useDispatch} from 'react-redux'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import style from "./Favorites.module.css"

export default function Favorites () {

    const dispatch = useDispatch();

    const myFavorites = useSelector((state) => state.myFavorites)
    console.log(myFavorites)

    const [aux, setAux] = useState(false);

    function handleOrder(event){
        dispatch(orderCards(event.target.value))
        setAux(true)
    }
    function handleFilter(event){
        dispatch(filterCards(event.target.value))
    }
    


    return (
        <div className={style.conteiner}>
            <select className={style.order} onChange={handleOrder} name="" id="">
                <option value="" disabled selected>ORDER</option>
                <option value="Ascendente">Ascendent</option>
                <option value="Descendente">Descendent</option>
            </select>
            <select className={style.gender} onChange={handleFilter}name="" id="">
                <option value="" disabled selected>GENDER</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>

            <Cards characters={myFavorites} />

        </div>
    )
}

