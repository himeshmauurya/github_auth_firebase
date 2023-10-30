import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { NativeModules } from 'react-native'
const App = () => {
  const[email,setEmail]=useState("")
  return (
    <>
    {/* <TouchableOpacity onPress={() => {
          var OpenActivity=NativeModules.OpenActivity;
OpenActivity.open();
         }}>
           
           <Text>Alien</Text>
         </TouchableOpacity> */}
    <TouchableOpacity onPress={()=>{
      var openActivity=NativeModules.OpenActivity;
      openActivity.open((value)=>{
        
      })
    }}>
      <Text>open app</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {
      var openActivity=NativeModules.OpenActivity;
          openActivity.getEmail((value1)=>{
            setEmail(value1)
          })
         }}><Text>Get details</Text></TouchableOpacity>
         <TouchableOpacity onPress={() => {
      var openActivity=NativeModules.OpenActivity;
          openActivity.signOut()
         }}><Text>signout</Text></TouchableOpacity>
         
    <Text>{email}</Text>
    </>
  )
}

export default App