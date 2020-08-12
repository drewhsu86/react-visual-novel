import React, { useState } from 'react'

export default function FillText(props) {
  const { scene, assets, changeScene, saveVar } = props.controller

  // we need a state for the user to input their choice 
  const [inputFill, setInputFill] = useState('')

  const handleSubmit = () => {
    try {
      // can only submit user input if saveVar runs for the key and val 
      // confirmation window instead of disallow empty string 
      const prompt = window.confirm(`Are you sure you want to use ${inputFill}?`)
      if (prompt) {
        saveVar(scene.changeVar, inputFill)
        changeScene(scene.gotoScene)
      } else {
        setInputFill('')
      }
    } catch (error) {
      console.log(error)
      console.log('Error: Could not finish submitting user input')
    }
  }

  if (!scene) {
    return <h1>No Valid Title Scene Loaded</h1>
  } else {
    // set css styles for scene 
    const styles = {
      backgroundImage: `url("${assets[scene.background]}")`
    }

    return (
      <div className="screen fillText"
        style={styles}
      >
        <h1>{scene.title}</h1>
        <h3>{scene.instructions}</h3>

        <input
          type="text"
          value={inputFill}
          onChange={(e) => setInputFill(e.target.value)}
        />

        <button onClick={handleSubmit}>Submit</button>
      </div>
    )
  }
}
