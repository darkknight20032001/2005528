import React, { useEffect, useState } from 'react'

const TrainCard = ({ item }) => {
    console.log(item)
    const [currentTimeInSeconds, setCurrentTimeInSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
          const currentTime = new Date();
          const referenceTime = new Date("January 1, 2023 00:00:00"); 
          const timeDifferenceInSeconds = Math.floor((currentTime - referenceTime) / 1000);
          setCurrentTimeInSeconds(timeDifferenceInSeconds);
        }, 1000); 
        return () => clearInterval(intervalId);
      }, []);
console.log(currentTimeInSeconds)

    return (
        <div>
            <ul>
                <h3>{item.trainName}</h3>
                <li>{item.trainNumber}</li>
                <li>{item?.departureTime?.Hours + ':' + item?.departureTime?.Minutes + ':' + item.departureTime?.Seconds}</li>
            <li>{item?.price?.AC}</li>
            <li>{item?.price?.sleeper}</li>
            
            </ul>
        </div>

    )
}

export default TrainCard