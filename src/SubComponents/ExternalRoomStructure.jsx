import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../Styles/SubComponentsStyles/ExternalRoomStructure.css"


export default function (props) {
  const nav = useNavigate();


  return (
    <div id='ExternalRoomStructure_container'
      style={{ backgroundColor: props.Main_values.color }}
      onClick={() => {
        props.Main_roomSelectionHandler(props.Main_index);
        nav("/" + String(props.Main_values.name))
      }}
    >

      <h3>{props.Main_values.name}</h3>
      <h4>{props.Main_values.type}</h4>


    </div>
  )
}
