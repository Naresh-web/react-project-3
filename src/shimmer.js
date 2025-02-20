import React from 'react'

const Shimmer = () => {
  return <>
    {
        Array(10).fill('').map(item => <div className="shimmer"></div>)
    }
     
  </>

}

export default Shimmer