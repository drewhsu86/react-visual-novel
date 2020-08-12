import React from 'react'
import Title from './Title'

export default function Scene(props) {
  const { scene, assets } = props 

  console.log(scene)

  switch (scene.type) {
    case 'title':
      return (
        <Title scene={scene} assets={assets} />
      )
    default: 
      return (
        <h1>No Defined Scene Type In JSON</h1>
      )
  }
}
