import React from 'react'
import { connect } from 'react-redux'
import Cards from './Cards'


const Favorites = ({ myFavorites }) => {
    console.log(myFavorites)
    return (
        <div>

            <Cards characters={myFavorites} />

        </div>
    )
}

const mapStateToProps = (state) => {
    return { myFavorites: state.myFavorites }
}


export default connect(
    mapStateToProps,
    null
)(Favorites)


