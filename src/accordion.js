import React, { useState } from 'react'

const AccCard = ({title, description, isVisible, setVisible}) => {

    return <>
    <div className="AccCard">
        <h4>{title}</h4>

        {
            !isVisible ?  <button onClick={() => setVisible()}>Show</button>  : 
            (
                <>
                    <p>{description}</p> 
                    <button onClick={() => setVisible()}>Hide</button> 
                </>
            )
        }
        
    </div>

    </>
}
const Accordion = () => {
    const [visibleSection, setVisibleSection] = useState('card 1')
  return <>
    <h1>Accordion</h1>
    <div>
        <AccCard title = {'Card 1'} description = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, cumque.'} 
        isVisible = {visibleSection === 'card 1' } 
        setVisible = {() => setVisibleSection('card 1')}/>

        <AccCard title = {'Card 2'} description = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, cumque.'} 
        isVisible= {visibleSection === 'card 2'} 
        setVisible = {() => setVisibleSection('card 2')}/>

        <AccCard title = {'Card 3'} description = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, cumque.'} 
        isVisible= {visibleSection === 'card 3'} 
        setVisible = {() => setVisibleSection('card 3')}/>
    </div>
  </>
  
}

export default Accordion