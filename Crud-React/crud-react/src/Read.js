import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import "./style.css"

const Read = () => {
  const [data, setData] = useState([])



  function getData(){
    axios.get('https://642277d477e7062b3e1a4cf6.mockapi.io/crud-react')
    .then((res)=>{
      console.log(res.data)
      setData(res.data)
    })
  }

  function handleDelete(id){
    axios.delete(`https://642277d477e7062b3e1a4cf6.mockapi.io/crud-react/${id}`)
    .then(()=>{
      getData()
    })
  }

  function setToLocalStorage(id,name,destination,hotel,arrival,departure,guests,price){
    localStorage.setItem("id",id);
    localStorage.setItem("name",name);
    localStorage.setItem("destination",destination);
    localStorage.setItem("hotel",hotel);
    localStorage.setItem("arrival",arrival);
    localStorage.setItem("departure",departure);
    localStorage.setItem("guests",guests);
    localStorage.setItem("price",price);


  }
  
  useEffect(() => {
   
    getData()
  }, [])
  

  return (
    <div className="container">
    <h2 className="hk">Tour Management</h2>
    <Link to="/"><button className='create'>Create Tour</button></Link>
    <table class="table table-success table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">TourName</th>
      <th scope="col">Destination</th>
      <th scope="col">Hotel</th>
      <th scope="col">Arrival</th>
      <th scope="col">Departure</th>
      <th scope="col">Guests</th>
      <th scope="col">Price</th>
      <th scope="col">#</th>
      <th scope="col">#</th>
    </tr>
  </thead>
  {
    data.map((eachData)=>{
       return(
        <tbody>
        <tr>
          <th scope="row">{eachData.id}</th>
          <td>{eachData.name}</td>
          <td>{eachData.destination}</td>
          <td>{eachData.hotel}</td>
          <td>{eachData.arrival}</td>
          <td>{eachData.departure}</td>
          <td>{eachData.guests}</td>
          <td>{eachData.price}</td>


          
          <th scope="col"><Link to="/update"><button class="btn btn-success" onClick={()=>setToLocalStorage(eachData.id,eachData.name,eachData.destnation,eachData.hotel,eachData.arrival,eachData.departure,eachData.guests,eachData.price)}>Update</button> </Link></th>
         
          
          <th scope="col"><button class="btn btn-danger" onClick={()=>handleDelete(eachData.id)}>Delete</button></th>
        </tr>
       
      </tbody>
       )
    })
    
}
</table>
    </div>
  )
}

export default Read