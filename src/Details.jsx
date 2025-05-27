import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

function Details() {
const[articl,setArticl]=useState("")
const {id} = useParams()
useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then(function (response) {
    setArticl(response.data)
    // handle success
    
    console.log(response.id);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
},[id])

  return (
    <>
   <div>
      <h2>{articl.title}</h2>
      <p>{articl.body}</p>
    </div>
    </>
  )
}

export default Details



// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// // import { useParams } from 'react-router'
// function Details() {
//     const [content,setContent]=useState([])
// useEffect(()=>{
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//   .then(function (response) {
// setContent(response.data)
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
// })

//   return (
//     <>
//     <div>
// {content.map((item,i)=>(
//     <div key={i}>
//       <h1>Artical ID: {item.id} </h1>  
//       <h1>Artical title: {item.title}</h1>  
       
//     </div>
// ))}
//     </div>
//     </>
//   )
// }

// export default Details

