import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router'
function Details() {
const[articl,setArticl]=useState([])

useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/posts`)
  .then(function (response) {
    setArticl(response.data)
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
},[])

  return (
    <>
    <div>
{articl.map((item,i)=>(
    <div   key={i}>
        {/* <p>{item.title}</p> */}
        <Link to={`/details/${item.id}`}>
        
            <p>{item.title}</p>
        
        </Link>
    </div>
))}
    </div>
    </>
  )
}

export default Details