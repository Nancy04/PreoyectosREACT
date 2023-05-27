import React from 'react'
import Card from "./card";
import image1 from "../assets/react.jpg";
import image2 from "../assets/java.jpg";
import image3 from "../assets/docker.jpg";


const cards = [ 
{
  id: 1,
  title:"Curso de React",
  image:image1,
  instructor:"Nancy Casas Mendoza"
},
{
  
  id: 2,
  title:'Curso de Java',
  image:image2,
  instructor:"Luis Oswaldo Sanchez"

},
{
id:3,
  title: 'Curso de docker',
  image: image3,
  instructor: "Concepcion Garcia"

}

]

export default function Cards() {
  console.log(cards)
  return (
    <div className = "container d-flex justify-content-center aling-items-center h-100">
    
      
      <div className='row'>
        {
        cards.map(c=>(
        
        <div className="col-md-4" key={cards.id}>
        <Card 
         key={c.id}
         id={c.id}
         key={c.title}
         image={c.image}
         instructor={c.instructor}

          />
          </div>
        ))
}
    </div>
    </div>
  );
}

