import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TrainCard from './TrainCard';

const TrainsList = () => {
    const accessToken = sessionStorage.getItem('accessToken');
    const [trainDetails, setTrainDetails] = useState([]);
    console.log(accessToken)
    const headers = { 'Authorization': 'Bearer ' + accessToken };

   
    useEffect(() => {
        const TrainGet = async () => {
            const trainData = await axios.get('http://20.244.56.144/train/trains', { headers });
           
            setTrainDetails(trainData?.data);
        }
        TrainGet()
    }
        , [])

    return (
        <div><h3>TrainsList</h3>
            { trainDetails.length>0 &&
            trainDetails.map((item) => 
            { 
                return <TrainCard key={item.trainName} item={item}/> 
            })}

        </div>
    )
}

export default TrainsList