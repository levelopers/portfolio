import React from 'react'

let history
//register
export default function RouterInstance(props) {
  history=props.history
  return null
}
//output interface
export const router=(link)=>{
  history.push(link)
}