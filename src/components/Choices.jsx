import React from 'react'

export default function Choices(props) {
  const { scene, assets, changeScene, saveVar } = props.controller

  if (!scene) {
    return <h1>No Valid Title Scene Loaded</h1>
  } else {
    // set css styles for scene 
    const styles = {
      backgroundImage: `url("${assets[scene.background]}")`
    }

    return (
      <div className="screen choices"
        style={styles}
      >

        {
          scene.choices.map((choice, ind) => {
            return <button className="choice" onClick={() => {
              try {
                // if there are variables to change, change them 
                // if there is a destination to go to, go there 
                // else, just go to scene.gotoScene 
                if (choice.changeVar) {
                  const keys = Object.keys(choice.changeVar) 
                  keys.forEach(key => saveVar(key, choice.changeVar[key]))
                }
                if (choice.gotoScene) {
                  changeScene(choice.gotoScene)
                } else {
                  changeScene(scene.gotoScene)
                }
              } catch (error) {
                console.log(error)
                console.log('Error: onClick of button in choices')
              } 
            }} key={ind}>
              {choice.text || `Choice ${ind}`}
              </button>
          })
        }
        
      </div>
    )
  }
}
