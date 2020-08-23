import React from 'react'
import { NavLink } from 'react-router-dom'


export const Navigation = () => {
    return (
        <div>
            <span></span>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/covid">COVID-19 Update</NavLink>
            <NavLink to="/capabilities">Capabilities</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/partnerships">Partnerships</NavLink>
            <NavLink to="/health">Health & Safety</NavLink>
            <NavLink to="/">Leadership & Operations</NavLink>
            <NavLink to="/">Employee Portal</NavLink>
            <NavLink to="/">Contact</NavLink>
            <span><i className="fab fa-facebook-square"></i></span>
            <span></span>
        </div>
    )
}
