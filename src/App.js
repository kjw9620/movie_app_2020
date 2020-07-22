import React from 'react';
import propTypes from "prop-types";

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    rating: 1.0,
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    id:2,
    name: "Samgyeopsal",
    rating: 2.1,
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  {
    id:3,
    name: "Bibimbap",
    rating: 3.2,
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  },
  {
    id:4,
    name: "Doncasu",
    rating: 4.5,
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    id:5,
    name: "Kimbap",
    rating: 5.0,
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
];


function Food( {name, picture, rating} ) {
  console.log(name);
  return <div>
    <h1> I love {name} </h1>
    <h4> {rating}/5.0 </h4>
    <img src={picture} alt={name}/>
  </div>
  
};

function renderFood(dish) {

  return (
    <Food 
    
    key={dish.id}
    name={dish.name}
    picture={dish.image}
    rating={dish.rating}

    />
  )
};

Food.propTypes = {
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  rating: propTypes.number.isRequired
};

function App() {
  return (
    <div>
      <h1>hello</h1>
      {foodILike.map(renderFood)}
      
    </div>
  );
}

export default App;
