import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../Styles/GlobalStyles.css"
import "../Styles/ComponentStyles/Home.css"
import "../Styles/ComponentStyles/HomeAnimation.css"


export default function Home(props) {
  const nav = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onEnter = () => {
    if (userName === "Hired" && password === "Hired") {
      nav("/main")
    }
    else {
      window.alert("Username: Hired\nPassword: Hired")
    }
  }

  return (
    <div className='Global_componentContainer' id="Home_container">

      <div id='Home_pageContainer'>

        <div id='Home_instructionDiv'>
          <text className='Home_instructionText'>
            Please insert "Hired"
            <span className='HomeAnimation_dots'>.</span>
            <span className='HomeAnimation_dots'>.</span>
            <span className='HomeAnimation_dots'>.</span>
          </text>
        </div>


        <div id="Home_signInDiv">
          <input type={"text"} className='Home_input' placeholder='Username' onChange={(input) => { setUserName(input.target.value) }} />
          <br />
          <input type={"password"} className='Home_input' placeholder='Password' onChange={(input) => { setPassword(input.target.value) }} />
          <br />
          <button id='Home_button' onClick={() => { onEnter() }}>ENTER</button>
        </div>

      </div>

    </div>
  )
}
