import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Main from "./Components/Main";
import InteriorRoomStructure from "./Components/InteriorRoomStructure";
import Create from "./Components/Create";

function App() {
  const [introDisplay, setIntroDisplay] = useState(true) //In charge of the message display in Main
  const [rooms, setRooms] = useState([]); //Contains the rooms info
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(); //Holds the user's selected room's index
  const [selectedRoomName, setSelectedRoomName] = useState(""); //Holds the address's name
  const [roomKey, setRoomKey] = useState(0); //A simple key generator (for databases)

  //COMPONENT FUNCTIONS
  //Create funcs
  const addRoomFunc = (rName, rType, rColor) => {
    let tempRoomObject = {
      name: String(rName),
      type: String(rType),
      color: rColor,
      key: roomKey,
      devices: []
    }
    setRooms((previousRooms) => {
      return ([...previousRooms, tempRoomObject])
    }
    )
    let tempKey = roomKey;
    tempKey++;
    setRoomKey(tempKey)
  };


  //Main funcs
  const roomSelectionHandler = (recievedIndex) => {
    let tempIndex = Number(recievedIndex)
    setSelectedRoomIndex(tempIndex);
    setSelectedRoomName(rooms[tempIndex].name)
  };


  //InteriorRoomStructure funcs
  const nameChangeHandler = (input) => {
    let temp = [...rooms]
    temp[selectedRoomIndex].name = input;
    setRooms([...temp])
  };

  const deleteRoomHandler = () => {
    let temp = [...rooms]
    temp.splice(selectedRoomIndex, 1)
    setRooms([...temp])
    setSelectedRoomIndex("");
  };


  const addDeviceHandler = (rDevice) => {
    if (rooms[selectedRoomIndex].devices.length <= 9) {
      if (rDevice === "null" || rDevice.length <= 1) {
        return window.alert("Please choose a device")
      }
      let tempDevice = {
        deviceName: rDevice,
        mode: "off",
        color: "rgb(219, 31, 31)"
      }
      let temp = [...rooms]
      temp[selectedRoomIndex].devices.push(tempDevice)
      setRoomKey([...temp])
    }
    else { window.alert("Maximum device number reached") }
  };
  

  const deviceOptionsHandler = (passedValues) => {
    let tempValues = passedValues.split(",");
    let tempIndex = Number(passedValues[0])
    let tempMode = String(tempValues[1])
    let tempRooms = [...rooms]

    if (tempMode === "on") {
      tempRooms[selectedRoomIndex].devices[tempIndex].mode = "on";
      tempRooms[selectedRoomIndex].devices[tempIndex].color = "rgba(94, 255, 120)";
      setRooms([...tempRooms])
    }
    else if (tempMode === "off") {
      tempRooms[selectedRoomIndex].devices[tempIndex].mode = "off";
      tempRooms[selectedRoomIndex].devices[tempIndex].color = " rgb(219, 31, 31)";
      setRooms([...tempRooms])
    }
    else if (tempMode === "delete") {
      tempRooms[selectedRoomIndex].devices.splice(tempIndex, 1)
      setRooms([...tempRooms])
    }
  };


  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element=
            {
              <Home />
            }
          />
          <Route
            path="/main"
            element=
            {
              <Main
                App_rooms={rooms}
                App_roomSelectionHandler={roomSelectionHandler}
                App_introDisplay={introDisplay}
                App_setIntroDisplay={setIntroDisplay} />
            }
          />
          <Route
            path="/create"
            element=
            {
              <Create
                App_addRoomFunc={addRoomFunc} />
            }
          />
          <Route
            path={"/" + String(selectedRoomName)}
            element=
            {
              <InteriorRoomStructure
                App_selectedRoom={rooms[selectedRoomIndex]}
                App_nameChangeHandler={nameChangeHandler}
                App_deleteRoomHandler={deleteRoomHandler}
                App_addDeviceHandler={addDeviceHandler}
                App_deviceOptionsHandler={deviceOptionsHandler} />
            }
          />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
