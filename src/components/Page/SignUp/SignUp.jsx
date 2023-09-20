import React, { useEffect, useState } from "react"
import Navbar from "../../Navbar"
import InputField from "../../InputField"
import "./signup.css"
import { KeyOutlined, MailOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import Button from "../../Button"

const SignUp = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [Copassword, setCoPassword] = useState("")
  return (
    <div>
      <div>
        <Navbar activeNav="home" />
      </div>
      <div className="page">
        <img className="center-logo" src="/logo.jpg" width={96} height={96} alt="Logo" />
        <div className="signup-form">
          <div className="signup-text">Create An Accountt</div>
          <div className="signup-2-text">Create an account to enjoy all the services without any ads for free!</div>
          <div className="signup-input-field">
            <InputField
              icon={<MailOutlined style={{ fontSize: "16px" }} />}
              type={1}
              title={"username"}
              text="Enter your username"
              setInputValue={setUsername}
            />
            <InputField
              icon={<MailOutlined style={{ fontSize: "16px" }} />}
              type={1}
              title={"email"}
              text="Enter your email"
              setInputValue={setEmail}
            />
            <InputField
              icon={<KeyOutlined style={{ fontSize: "16px" }} />}
              type={1}
              title={"Password"}
              password={true}
              setInputValue={setPassword}
            />
            <InputField
              icon={<KeyOutlined style={{ fontSize: "16px" }} />}
              type={1}
              title={"Confirm Password"}
              password={true}
              setInputValue={setCoPassword}
            />
          </div>
          <div className="bottom-form-ctn">
            <div className="signup-button-ctn">
              <Button
                type="primary"
                styles={{
                  borderRadius: "10px",
                  width: "208px",
                  height: "48px",
                }}
                onClick={() => { }}
              >
                Create Account
              </Button>
            </div>
            <div className="not-have-account" style={{ color: "#495059" }}>
              Already Have An Account?{" "}
              <Link href="login" style={{ color: "black" }}>
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
