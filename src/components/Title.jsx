import React from 'react'

export default function Title(props) {
  const { scene, assets, changeScene } = props.controller

  if (!scene) {
    return <h1>No Valid Title Scene Loaded</h1>
  } else {
    // set css styles for scene 
    const styles = {
      backgroundImage: `url("${assets[scene.background]}")`
    }

    return (
      <div className="screen title"
        style={styles}
      >
        <h1>{scene.title}</h1>
        <h2>{scene.subtitle}</h2>

        <button onClick={() => changeScene(scene.gotoScene)}>Start</button>
      </div>
    )
  }
}
