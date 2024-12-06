import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../Styles/ComponentStyles/Main.css"
import ExternalRoomStructure from '../SubComponents/ExternalRoomStructure.jsx';



export default function Main(props) {
  const nav = useNavigate();


  const onCreateClicked = () => {
    if (props.App_rooms.length < 9) {
      nav("/create")
    }
    else { window.alert("Rooms number is maxed") }
  }


  return (
    <div className="Global_componentContainer" id='Main_container'>
      <button id='Main_backButton' onClick={() => { nav("/") }}>Back</button>

      <div id='Main_subContainer'>

        {
          props.App_introDisplay &&
          <div id='Main_introDiv'>
            <h2 id='Main_introText'>
              Each room has a variety of devices that suit its type.
              {<br />}
              Upon entering a room, the web address will be changed to fit the room's chosen name.
            </h2>
            <button id='Main_introButton' onClick={() => { props.App_setIntroDisplay(!props.App_introDisplay) }}>Got It</button>
          </div>
        }

        <button id='Main_createButton' onClick={() => { onCreateClicked() }}>CREATE</button>

        {/*ROOMS*/}
        <div id='Main_roomsDiv'>
          {props.App_rooms.map((val, ind) => {
            return (
              <ExternalRoomStructure Main_values={val} Main_index={ind} Main_roomSelectionHandler={props.App_roomSelectionHandler} className='Main_externalRoomStructure' />
            )
          })}
        </div>



      </div>
    </div>
  )
}
