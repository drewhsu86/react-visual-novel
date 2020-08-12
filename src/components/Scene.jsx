import React from 'react'
import Title from './Title'

export default function Scene(props) {
  const { scene } = props.controller

  switch (scene.type) {
    case 'title':
      return (
        <Title controller={props.controller} />
      )
    default: 
      return (
        <h1>No Defined Scene Type In JSON</h1>
      )
  }
}
