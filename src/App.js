import React, { useState, useEffect } from 'react'
import './App.css'
import demo from './demo_story'
import Scene from './components/Scene'

function App() {
  const [story, setStory] = useState(null)
  const [scene, setScene] = useState('')

  useEffect(() => {
    initialize()
  }, [])

  // load story from json
  const initialize = () => {
    setStory(demo)
    const sceneName = demo.saveData.scene
    setScene(demo['scene_'+sceneName])
    console.log(demo)
  }

  // changes the current scene 
  const changeScene = (sceneName) => {
    setScene('scene_' + sceneName)
    updateProgress(sceneName)
  }

  // function with ability to save this scene in saveData 
  // (in the state, not in local)
  const updateProgress = (sceneName) => {
    try {
      story.saveData.scene = sceneName 
      setStory(story)
    } catch (error) {
      console.log(error)
      console.log('Error: Could not update scene in saveData')
    }
  }

  // function to save saveData to local storage as JSON 
  const saveProgress = () => {
    try {
      const saveData = JSON.stringify({ ...story.saveData, gameName: story.gameName })
      
      localStorage.setItem('save-'+story.gameName, saveData)
    } catch (error) {
      console.log(error)
      console.log('Error: Could not save saveData to localStorage')
    }
  }

  // random string generator 
  const randStr = (num) => {
    // num is length of string 
    let result = ''
    for (let i = 0; i < num; i++) {
      // unicode but i am trying to remove the empty
      const newCharCode = Math.ceil(Math.random() * 57) + 30
      const newChar = String.fromCharCode(newCharCode)
      result += newChar
    }
    return result 
  }

  console.log('scene', scene)
  if (story) {
    return (
      <div className="App">
        <Scene scene={scene} assets={story.assets} />
      </div>
    );
  } else {
    return (
      <h1>Loading Story...</h1>
    )
  }
}

export default App;
