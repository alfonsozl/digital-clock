import React, {useState, useEffect} from 'react'

const Clock = () => {

    const [hour, setHour] = useState(0)
    
    const time = new Date()

    let hours = time.getHours()
    let minute = time.getMinutes()
    let second = time.getSeconds()
    let period = 'AM'

    if (hours > 12) { 
        period = 'PM'
        hours = hours - 12
    }

    hours = hours < 10 ? '0'+hours : hours
    minute = minute < 10 ? '0'+minute : minute
    second = second < 10 ? '0'+second : second

    const printTime = `${hours}:${minute}:${second} ${period}`

    useEffect(() => {
        setTimeout(() => {
        setHour((hour) => hour + 1);
        }, 1000);
    })

    return (
        <>
            <h1 className='title'>Digital Clock</h1>
            <h2 className='clock'>{printTime}</h2>
        </>
        
    )
}

export default Clock