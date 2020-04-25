import React from 'react'

function Voicing({
		notes,
		attack,
		release,
		}){

	  const touchStart = (e) => {
		  console.log(attack)
		  attack(notes)
	  }

	  const clickStart = (e) => {
		  e.preventDefault()
		  attack(notes)
	  }
	
	  const pressEnd = (e) => {
		  e.preventDefault()
		  release(notes)
	  }
	return (<div 
			className="Voicing"
	  		onTouchStart={touchStart}
	  		onMouseDown={clickStart}
	  		onTouchEnd={pressEnd}
	  		onMouseUp={pressEnd}
	  		onContextMenu={(e) => { e.preventDefault() }}
			>
		{notes.reduce((acc,curr) => (acc + ' ,'  + curr))}
		</div>)
}

export default Voicing
