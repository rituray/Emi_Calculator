import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    const[open,setOpen]= useState(false);
    return (
        <div>
            <nav>
                <div className="logo">CARD INSIGHTER</div>
                <ul className="nav-links" style={{transform:open?"translateX(0px)": ""}}>
                    <Link to="/Financial_Calculator">Financial Calculator</Link>
                    <Link to="/Home">Home</Link>
                    <Link to="/Personal">Personal</Link>
                    <Link to="/Car">Car</Link>
                </ul>
                <i onClick={()=>setOpen(!open)} className="fas fa-bars burger"></i>
            </nav>
           

        </div>
    )
}

export default Navbar
