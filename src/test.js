
import React from 'react'

const Test = () => {
    const data = [
        {
        id:1,
        name: "Naresh",
        age: 29,
        isMarried: false
        },
        {
        id:2,
        name: "Anji",
        age: 35,
        isMarried: true
        },
        {
        id:3,
        name: "Somesh",
        age: 30,
        isMarried: false
        }
        ]
        
        const filtered = data.filter(item => item?.age > 29)
        const output = filtered.map(item => (<li>{item.name} &nbsp; {item.isMarried}</li>))
        console.log({output});
  return (
    <ol>{output}</ol>

  )
}

export default Test
    