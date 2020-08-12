// helper functions to be imported to scene components

// function that parses variable names sandwiched by 
// square brackets [] inside dialogue text 
// and replaces them with the actual value from saveData 
export const fillInVars = (str, saveData) => {
  try {
    // use a queue system 
    // we are either taking the string or looking for a variable name 
    let currStr = ''
    let checkingStr = true 
    let i = 0
    let queue = []
    while (i < str.length) {
      // if open bracket we are not checking string anymore 
      // if close bracket we are back to checking string 
      // both of them send the currStr to a queue which is reassembled 
      if (checkingStr) {
        if (str[i] === '[') {
          // go into var mode and reset 
          checkingStr = false 
          queue.push(currStr)
          currStr = ''
        } else {
          currStr += str[i]
        }
      } else {
        if (str[i] === ']') {
          // go into str mode and reset 
          checkingStr = true 
          queue.push(saveData ? (saveData[currStr] || '') : '')
          currStr = ''
        } else {
          currStr += str[i]
        }
      }
      i++
    }
    // push any remaining text into queue 
    if (currStr) queue.push(currStr)

    // add all the pieces of the queue together 
    let result = ''
    while (queue.length > 0) {
      result += queue.shift()
    }
    
    return result 
  } catch (error) {
    console.log(error)
    console.log('Error: Could not successfully fill in variables from string and saveData')
  }
}