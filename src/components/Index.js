import React from 'react'
import Card from './Card'
import Carousel from './Carousel'

export const Index = () => {
  return (
      <>
        <Carousel/>
          search using catagory
        <div className="my-4 w-4/5 ml-32 grid grid-rows-3 grid-flow-col gap-4">
          <Card name="Sight seeing" /> 
          <Card name="Hills" /> 
          <Card name="Urban culture" /> 
          <Card name="Adventure" /> 
          <Card name="Beaches" /> 
          <Card name="Family/ Religious" /> 
          <Card name="Art and Culture" /> 
          <Card name="Budget friendly" /> 
          <Card name="Traditional and history" /> 
          

        </div>
      </>
    
  )
}
