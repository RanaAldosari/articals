import React,{useState,useEffect} from 'react'
// import axios from 'axios'
import { Link } from 'react-router'
function Home() {
  
const[articl,setArticl] = useState([])

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => setArticl(data))
    .catch(err => console.log('Failed to fetch data', err));
}, []);


// useEffect(()=>{
// try {
//         fetch("https://jsonplaceholder.typicode.com/posts")
        
//   .then((response.json()) =>{
//     // 
//     setArticl(response.data)
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
// } catch (error) {
//   console.log(error)
// }
// },[])

  return (
    <>
    <div>
{articl.map((item,i)=>(
    <div key={item.id}>
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