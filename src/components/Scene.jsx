import React from 'react'
import Title from './Title'
import Dialogue from './Dialogue'

export default function Scene(props) {
  const { scene } = props.controller

  switch (scene.type) {
    case 'title':
      return <Title controller={props.controller} />
    case 'dialogue':
      return <Dialogue controller={props.controller} />
    default: 
      return <h1>No Defined Scene Type In JSON</h1>

  }
}
