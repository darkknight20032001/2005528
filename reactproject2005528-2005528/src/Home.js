import axios from 'axios'
import React, { useEffect } from 'react'

const Home = () => {
    const body={
        
            "companyName": "Train Central",
            "clientID": "d6a28d1b-38fc-4b51-9eb6-a1f4971cefbc",
            "clientSecret": "mYWddEktBDrWMYZT",
            "ownerName": "Rachit Verma",
            "ownerEmail": "rachitcse20032001@gmail.com",
            "rollNo": "2005528"
        }
    
    useEffect(()=>{
const getData = async()=>{
    const getAuth = await axios.post('http://20.244.56.144/train/auth',body)
    console.log(getAuth?.data?.access_token);
    const accessToken = getAuth?.data?.access_token;
    sessionStorage.setItem('accessToken',accessToken);

}
getData()
    },[])
  return (
    <div>Home</div>
  )
}

export default Home