import React from 'react'
import Slider from './Slider'
import { useLoaderData } from 'react-router-dom'

const Sliders = () => {

  const data = useLoaderData();
  let group = [];

data.categories.forEach((category) => {
  const categoryGroups = Object.values(category)[3]; 
  const discountedGroups = categoryGroups.filter((group) => group.discount > 0);
  group = group.concat(discountedGroups);
});


  return (
    <div>
      {group.map((product)=> {
        return <Slider data={product}/>
      })}
    </div>
  )
}

export default Sliders