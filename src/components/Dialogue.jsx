import React, { useState } from 'react'

export default function Dialogue(props) {
  const { scene, assets, changeScene } = props.controller

  // index of text array from scene 
  const [currText, setCurrText] = useState(0)

  console.log('currText', currText)

  if (!scene) {
    return <h1>No Valid Dialogue Scene Loaded</h1>
  } else {
    // set css styles for scene 
    const styles = {
      backgroundImage: `url("${assets[scene.background]}")`
    }

    const handleMessage = () => {
      if (currText < scene.text.length) {
        setCurrText(currText+1)
      }
    }

    return (
      <div className="screen"
        style={styles}
      >
  
        <div className="dialogue-box" onClick={handleMessage}>
          {/* if array is finished, ask if move on to next scene  */}
          {
            currText < scene.text.length ? <p>
              { scene.text[currText] }
            </p> : <div className="dialogue-horizontal">
                <button onClick={() => changeScene(scene.gotoScene)}>
                  Go To Next Scene
                </button>
                <button onClick={() => setCurrText(0)}>
                  Watch Scene Again
                </button>
                </div>
          }
        </div>
      </div>
    )
  }
}
