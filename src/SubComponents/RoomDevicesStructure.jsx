import React, { useState } from 'react'
import "../Styles/SubComponentsStyles/RoomDevicesStructure.css"

export default function RoomDevicesStructure(props) {


  return (
    <div id='RDS_container'>

      <div id="RDS_deviceNameDiv">
        <h3 id='RDS_deviceName' style={{ color: props.IRS_devicesValues.color }}>{props.IRS_devicesValues.deviceName}</h3>
      </div>
      
      {/**
       * Filters which mode (on\off) should be displayed
       */}
      {
        props.IRS_devicesValues.mode === "on" &&
        <button
          className='RDS_deviceButtons'
          style={{ backgroundColor: props.IRS_devicesValues.color }}
          onClick={() => { props.IRS_deviceOptionsHandler(`${props.IRS_deviceIndex},off`) }}
        >On</button>
      }
      {
        props.IRS_devicesValues.mode === "off" &&
        <button
          className='RDS_deviceButtons'
          style={{ backgroundColor: props.IRS_devicesValues.color }}
          onClick={() => { props.IRS_deviceOptionsHandler(`${props.IRS_deviceIndex},on`) }}>Off</button>
      }

      <button
        className='RDS_deviceButtons'
        onClick={() => { props.IRS_deviceOptionsHandler(`${props.IRS_deviceIndex},delete`) }}
      >Delete</button>

    </div>
  )
}
