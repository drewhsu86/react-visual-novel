import React, { useEffect } from 'react'

export default function FadeTo(props) {
  const { scene, changeScene } = props.controller

  useEffect(() => {
    // after a delay change to another scene 
    const msDelay = scene.msDelay || 1000
    setTimeout(() => {
      changeScene(scene.gotoScene)
    }, msDelay)
  }, [scene])

  if (!scene) {
    return <h1>No Valid Title Scene Loaded</h1>
  } else {
    // set css styles for scene 
    const styles = {
      backgroundColor: 'black'
    }

    return (
      <div className="screen" style={styles}>
      </div>
    )
  }
}
