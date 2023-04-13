import { connect } from 'react-redux';
import Card from '../Card/Card.jsx';

const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites
    }
}

const Favorites = ({myFavorites}) => {
    return(
        <div>
            {
                myFavorites?.map(fav => {
                    return (
                        <Card
                            key={fav.id}
                            id={fav.id}
                            name={fav.name}
                            species={fav.species}
                            gender={fav.gender}
                            image={fav.image}
                            onClose={fav.onClose}
                        />
                    )
                })
            }
        </div>
    )
}

export default connect(
    mapStateToProps,
    null
 )(Favorites);
 