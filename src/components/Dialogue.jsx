import React, { useState } from 'react'
import { fillInVars } from './Logic'

export default function Dialogue(props) {
  const { scene, assets, changeScene, saveData } = props.controller

  // index of text array from scene 
  const [currText, setCurrText] = useState(0)

  // change scene in dialogues needs to reset the text index 
  const changeDiagScene = (sceneName) => {
    changeScene(sceneName)
    setCurrText(0)
  }

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

    // go to scene automatically if autoGoto is set to true 
    if (scene.autoGoto && currText >= scene.text.length ) {
      changeDiagScene(scene.gotoScene)
    }

    return (
      <div className="screen"
        style={styles}
      >
  
        <div className="portrait-holder">
          {
            scene.people.map((image, ind) => {
              return <img key={ind} alt={`Image of ${image}`}
                className="portrait-img"
                src={assets[image]}
              />
            })
          }
        </div>

        <div className="dialogue-box" onClick={handleMessage}>
          {/* if array is finished, ask if move on to next scene  */}
          {
            currText < scene.text.length ? <p>
              { fillInVars(scene.text[currText], saveData) }
            </p> : <div className="dialogue-horizontal">
                <button onClick={() => changeDiagScene(scene.gotoScene)}>
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
