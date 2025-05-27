import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router'
function Home() {
const[articl,setArticl] = useState([])

useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/posts`)
  .then( (response) =>{
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
{articl.map((item)=>(
    <div>
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

export default Home