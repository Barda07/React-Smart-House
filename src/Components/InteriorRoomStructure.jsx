import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../Styles/ComponentStyles/InteriorRoomStructure.css"
import RoomDevicesStructure from '../SubComponents/RoomDevicesStructure';


export default function InteriorRoomStructure(props) {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [selectedDevice, setSelectedDevice] = useState("");

  const devicesByRoomType = [
    { roomtype: "Living Room", devices: ["A/C", "Lights", "Smart TV", "Stereo", "Alexa", "Roomba", "Fireplace", "Security"] },
    { roomtype: "Kitchen", devices: ["A/C", "Lights", "Kettle", "Stove", "Vents", "Oven", "Fridge"] },
    { roomType: "Private Room", devices: ["A/C", "Smart TV", "Stereo", "Alexa", "Lights", "Roomba", "Fireplace", "Security"] },
    { roomType: "Dining Room", devices: ["A/C", "Stereo", "Lights", "Smart TV", "Roomba", "Fireplace"] },
    { roomType: "Bathroom", devices: ["Water Boiler", "Lights", "Hot-Tub"] },
    { roomtype: "Other", devices: ["A/C", "Smart TV", "Stereo", "Alexa", "Lights", "Roomba", "Water Boiler", "Fireplace", "Kettle", "Stove", "Vents", "Oven", "Fridge", "Security"] }
  ];

  const nameChangeHandler = () => {
    if (name.length >= 1 && name.length <= 7) {
      let flag = true;
      for (let i = 0; i < name.length; i++) {
        if (name.charAt(i) >= "a" && name.charAt(i) <= "z" || name.charAt(i) >= "A" && name.charAt(i) <= "Z") {
          continue;
        }
        else { flag = false }
      }
      if (flag === true && name != "main" && name != "create" && name != "Main" && name != "Create") {
        props.App_nameChangeHandler(name)
      }
      else { window.alert("name must only contain english letters\nand cannot be `main` or `create`") }
    }
    else { window.alert("no value entered") }
  };



  /*IRS = Internal Room Structure*/
  return (
    <div className='Global_componentContainer' id='IRS_container'>
      <button id='IRS_backButton' onClick={() => { nav("/main") }}>Back</button>
      <div id='IRS_subContainer'>

        <div id='IRS_roomDetailsDiv'>
          <h1 id='IRS_roomName'>{props.App_selectedRoom.name}</h1>
          <h1 id='IRS_roomType'>{props.App_selectedRoom.type}</h1> {/*fix text surfing*/}
        </div>


        <div id='IRS_roomEditDiv'>
          <div id='IRS_roomNameEditDiv'>
            <input id='IRS_roomNameInput' type={"text"} placeholder="Change Room Name" maxLength={7} onChange={(input) => { setName(input.target.value) }} />
            <button id='IRS_roomNameSubmitButton' onClick={() => { nameChangeHandler() }}>Submit</button>
          </div>


          <button id='IRS_roomDeleteButton' onClick={() => { props.App_deleteRoomHandler(); nav("/main") }}>DELETE ROOM</button>


          <div id='IRS_roomDeviceAddingDiv'>
            <select id='IRS_roomDeviceSelect' onClick={(select) => { setSelectedDevice(select.target.value) }}>
              <option disabled selected={true} value={"null"}>Choose New Device</option>
              {
                props.App_selectedRoom.type === "Living Room" &&
                devicesByRoomType[0].devices.map((val) => {
                  return <option value={val}>{val}</option>
                })
              }
              {
                props.App_selectedRoom.type === "Kitchen" &&
                devicesByRoomType[1].devices.map((val) => {
                  return <option value={val}>{val}</option>
                })
              }
              {
                props.App_selectedRoom.type === "Private Room" &&
                devicesByRoomType[2].devices.map((val) => {
                  return <option value={val}>{val}</option>
                })
              }
              {
                props.App_selectedRoom.type === "Dining Room" &&
                devicesByRoomType[3].devices.map((val) => {
                  return <option value={val}>{val}</option>
                })
              }
              {
                props.App_selectedRoom.type === "Bathroom" &&
                devicesByRoomType[4].devices.map((val) => {
                  return <option value={val}>{val}</option>
                })
              }
              {
                props.App_selectedRoom.type === "Other" &&
                devicesByRoomType[5].devices.map((val) => {
                  return <option value={val}>{val}</option>
                })
              }
            </select>
            <button id='IRS_roomDeviceAddButton' onClick={() => { props.App_addDeviceHandler(selectedDevice) }}>Add</button>
          </div>


        </div>




        <div id='IRS_roomDevicesDiv'>

          {props.App_selectedRoom.devices.map((val, ind) => {
            return <RoomDevicesStructure IRS_devicesValues={val} IRS_deviceIndex={ind} IRS_deviceOptionsHandler={props.App_deviceOptionsHandler} />
          })}

        </div>


      </div>
    </div>
  )
}
