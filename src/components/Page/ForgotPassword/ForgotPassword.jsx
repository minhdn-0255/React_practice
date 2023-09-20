import React, { useState } from "react"
import Navbar from "../../Navbar"
import InputField from "../../InputField"
import "./forgot.css"
import { MailOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"


const ForgotPassword = () => {
  const [username, setUsername] = useState("")
  return (
    <div>
      <div>
        <Navbar activeNav="home" />
      </div>
      <div className="page">
        <div className="forgot-form">
          <div className="forgot-text">Restore your account</div>
          <div className="forgot-2-text">Please enter your email or mobile number to recover your account.</div>
          <div className="forgot-input-field">
            <InputField
              icon={<MailOutlined style={{ fontSize: "16px" }} />}
              type={1}
              title={"Email"}
              text="monke@gmail.com"
              setInputValue={setUsername}
            />
          </div>
          <div className="bottom-form-ctn-row">
            <Link className={"cancel-button-ctn"} href={"login"}>
              Cancel
            </Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
