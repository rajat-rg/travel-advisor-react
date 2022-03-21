import React from 'react'
import {Link} from 'react-router-dom'
import travel from "../static/travel.jpg"
const Card = ({name}) => {
  return (
    
<div className="  max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
<Link to="#">
<img className="rounded-t-lg" src={travel} alt=""/>
</Link>
<div className="p-5">
<Link to="#">
<h5 className="mb-2 text-2xl font-bold tracking-tight text-purple-900 dark:text-white hover:text-purple-700">{name}</h5>
</Link>

</div>
</div>

  )
}

export default Card