import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Styles/ComponentStyles/Create.css";


export default function Create(props) {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [roomType, setRoomType] = useState("");
  const [color, setColor] = useState("");

  //Checks if all the details entered won't cause bugs in the website, and has a unique alert for each specific problem
  //For example: adding a room named "main" and entering it, will lead to the Main component instead, thus creating a useless room that cannot be deleted
  //Or by editing the room's type via the inspect>hook>state to a non-existing type which can also cause issues
  const addRoomHandler = () => {
    if (name.length >= 1 && name.length <= 7) {
      let flag = true;
      for (let i = 0; i < name.length; i++) {
        if (name.charAt(i) >= "a" && name.charAt(i) <= "z" || name.charAt(i) >= "A" && name.charAt(i) <= "Z") {
          continue;
        }//end of entered letters check
        else { flag = false }
      }//end of for loop
      if (flag === true && name != "main" && name != "Main" && name != "create" && name != "Create") {
        if (roomType === "Living Room" || roomType === "Kitchen" || roomType === "Private Room" || roomType === "Dining Room" || roomType === "Bathroom" || roomType === "Other") {
          if (color === "Crimson" || color === "Gold" || color === "Lime" || color === "DeepSkyBlue" || color === "DarkViolet" || color === "DeepPink") {
            props.App_addRoomFunc(name, roomType, color)
            nav("/main")
          }//end of color check (last one)
          else { window.alert("please choose a color") }
        }//end of roomype check
        else { window.alert("please choose a room type") }
      }//end of the flag and main\create checks
      else { window.alert("name must only contain english letters\nand cannot be `main` or `create`") }
    } // end of length check
    else { window.alert("please insert a name") }
  };


  return (
    <div className="Global_componentContainer" id='Create_container'>
      <button id={"Create_backButton"} onClick={() => { nav("/main") }}>Back</button>
      <div id='Create_subContainer'>

        <h1 id='Create_headline'>Create Room</h1>

        <input type={"text"} placeholder={"Name"} id={"Create_nameInput"} maxLength={7} onChange={(input) => { setName(input.target.value) }} />

        <select id={"Create_roomTypeSelect"} onClick={(select) => { setRoomType(select.target.value) }}>
          <option disabled selected={true}>Room Type</option>
          <option value={"Living Room"}>Living Room</option>
          <option value={"Kitchen"}>Kitchen</option>
          <option value={"Private Room"}>Private Room</option>
          <option value={"Dining Room"}>Dining Room</option>
          <option value={"Bathroom"}>Bathroom</option>
          <option value={"Other"}>Other</option>
        </select>

        <select id={'Create_colorSelect'} onClick={(input) => { setColor(input.target.value) }}>
          <option style={{ backgroundColor: "Black", color: "White", fontStyle: "italic" }} disabled selected={true}>Choose Color</option>
          <option style={{ backgroundColor: "Crimson", fontStyle: "italic" }} value={"Crimson"}>Crimson</option>
          <option style={{ backgroundColor: "Gold", fontStyle: "italic" }} value={"Gold"}>Gold</option>
          <option style={{ backgroundColor: "Lime", fontStyle: "italic" }} value={"Lime"}>Lime</option>
          <option style={{ backgroundColor: "DeepSkyBlue", fontStyle: "italic" }} value={"DeepSkyBlue"}>Deep Sky Blue</option>
          <option style={{ backgroundColor: "DarkViolet", fontStyle: "italic" }} value={"DarkViolet"}>Dark Violet</option>
          <option style={{ backgroundColor: "DeepPink", fontStyle: "italic" }} value={"DeepPink"}>Deep Pink</option>
        </select>

        <button id='Create_addButton' onClick={() => { addRoomHandler() }}>ADD</button>

      </div>
    </div>
  )
}
