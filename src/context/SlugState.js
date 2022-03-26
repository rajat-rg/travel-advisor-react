import React, {useState} from 'react'
import slugContext from './slugContext'

const SlugState = (props) => {
  const [slug, setSlug] = useState("")
//   const update = (slug)=>{
//       setSlug(slug)
//   }
  return(

    <slugContext.Provider value={{slug, setSlug}}>
        {props.children}
    </slugContext.Provider>
  )
}


export default SlugState;