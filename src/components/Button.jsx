import React from "react"
import "./button.css"

/*
type Props = {
  children?: any
  type?: string
  onClick?: any
  disabled?: boolean
  htmlType?: any
  styles?: object
}*/

const Button = ({ type = "default", styles = {}, onClick = () => { }, disabled = false, htmlType = "button", children }) => {
  return (
    <button
      className={`custom-btn-${type}`}
      style={styles}
      onClick={onClick}
      disabled={disabled}
      type={htmlType}
    >
      {children}
    </button>
  )
}

export default Button
