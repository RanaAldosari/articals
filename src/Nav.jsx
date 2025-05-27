import React from 'react'
import { Link } from 'react-router'
function Nav() {
  return (
    <div>
<Link to="/">Home</Link>
<Link to="/:id">Details</Link>
{/* <Link to="/:id">Details</Link> */}
    </div>
  )
}

export default Nav