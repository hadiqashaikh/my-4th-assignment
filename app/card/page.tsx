import React from 'react'

interface cprops{
    name:string,
    rollnumber:number,
    day:string,
    timing:string,
}

const Card = (props:cprops) => {
  return (
    <div className='bg-orange-200 shadow-lg rounded-2xl p-4 max-w-xs' >
        <h1 className='text-1 font-bold'>Name {props.name}</h1>
        <h1 className='text-1 font-bold'>Rollnumber {props.rollnumber}</h1>
        <h1 className='text-1 font-bold'>day {props.day}</h1>
        <h1 className='text-1 font-bold'>time {props.timing}</h1>
    </div>
  )
}

export default Card