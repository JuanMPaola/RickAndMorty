import React from 'react'
import Cards from './Cards'
import { filterCards,orderCards } from '../redux/actions'
import { useDispatch} from 'react-redux'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export default function Favorites () {

    const myFavorites = useSelector((state) => state.myFavorites)
    console.log(myFavorites)

    const [aux, setAux] = useState(false);

    const dispatch = useDispatch();

    function handleOrder(event){
        dispatch(orderCards(event.target.value))
        setAux(true)
    }
    function handleFilter(event){
        dispatch(filterCards(event.target.value))
    }
    


    return (
        <div>
            <select onChange={handleOrder} name="" id="">
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
            <select onChange={handleFilter}name="" id="">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>

            <Cards characters={myFavorites} />

        </div>
    )
}

