import React from 'react'
import Title from './Title'
import Dialogue from './Dialogue'
import FillText from './FillText'
import Choices from './Choices'
import FadeTo from './FadeTo'

export default function Scene(props) {
  const { scene } = props.controller

  switch (scene.type) {
    case 'title':
      return <Title controller={props.controller} />
    case 'dialogue':
      return <Dialogue controller={props.controller} />
    case 'fillText':
      return <FillText controller={props.controller} />
    case 'choices':
      return <Choices controller={props.controller} />
    case 'fadeTo':
      return <FadeTo controller={props.controller} />
    default: 
      return <h1>No Defined Scene Type In JSON</h1>

  }
}
