import React from 'react'
import { NavLink } from 'react-router-dom'
import './Error.scss'

function Error() {
    return (
        <>
            <div className="setStyle">
                <h1>404 ERROR</h1>
                <h3>Sorry, This page doesn't exist</h3>
              <button type="button" className="btn btn-warning px-3 py-2">
              <NavLink to="/"> Go To Home Page </NavLink>
                </button>  
            </div>
        </>
    )
}

export default Error
