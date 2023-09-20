import React from "react"
import { Link } from "react-router-dom";
import "./nav_link.css"

const NavLink = ({ text, active }) => {
  return (
    <Link to={"/" + text.toLowerCase()} className={`nav-link-${active ? "active" : "disable"}`}>
      {text}
    </Link>
  )
}

export default NavLink
