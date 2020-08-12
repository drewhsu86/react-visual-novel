import React, { useState, useEffect } from 'react'
import './App.css'
import loadedStory from './demo_story'
import Scene from './components/Scene'

function App() {
  const [story, setStory] = useState(null)
  const [scene, setScene] = useState('')

  useEffect(() => {
    initialize()
  }, [])

  // load story from json
  const initialize = () => {
    try {
      setStory(loadedStory)
      const sceneName = loadedStory.saveData.scene
      setScene(loadedStory['scene_' + sceneName])
    } catch (error) {
      console.log(error)
      console.log('Error: Failed to load story')
    }
  }

  // changes the current scene 
  const changeScene = (sceneName) => {
    setScene(story['scene_' + sceneName])
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

  // change one variable in saveData to one value 
  const saveVar = (key, val) => {
    try { 
      story.saveData[key] = val 
      setStory(story)
    } catch (error) {
      console.log(error)
      console.log('Error: Could not change ' + key + 'in saveData')
    }
  }

  if (story) {
    // for passing props for the scenes to use 
    const controller = {
      scene, assets: story.assets, changeScene,
      saveData: story.saveData, saveVar 
    }

    return (
      <div className="App">
        <Scene controller={controller} />
      </div>
    );
  } else {
    return (
      <h1>Loading Story...</h1>
    )
  }
}

export default App;
