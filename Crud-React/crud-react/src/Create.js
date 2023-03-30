import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./style.css"


const Create = () => {

  const [name, setName] = useState("")
  const [destination, setDestination] = useState("")
  const [hotel, setHotel] = useState("")
  const [arrival, setArrival] = useState("")
  const [departure, setDeparture] = useState("")
  const [guests, setGuests] = useState(0)
  const [price, setPrice] = useState(0)


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const header = {"Access-Control-Allow-Origin": "*"}
    axios.post(
      'https://642277d477e7062b3e1a4cf6.mockapi.io/crud-react',{
      
        name: name,
        destination: destination,
        hotel: hotel,
        arrival: arrival,
        departure: departure,
        guests: guests,
        price: price,
        headers: {
  
          // Add any auth token here
          authorization: "your token comes here",
        },
      }
    )
    .then(()=>
    {
      navigate("/read")
    })

    
   
   


  }
  
  return (
    <div className='container-fluid bg'>
      
    
    <h2 className="hk">------  Add your Tour  ------</h2>
    
    <form>
      <div className="row">
        <div className="col-md-6">
        <div className="mb-3 container col-md-6">
    <label className="form-label">
        Tour Name
        </label>
    <input 
    type="text" 
    className="form-control"  
    // aria-describedby="emailHelp"
    onChange={(e)=>setName(e.target.value)} 
    />

    
  </div>
        </div>
        <div className="col-md-6">
        <div className="mb-3 container col-md-6">
    <label for="exampleInputPassword1" className="form-label">
        Destination
        </label>
    <input 
    type="text" 
    className="form-control" 
    onChange={(e)=> setDestination(e.target.value)}
    
    />
  </div>
        </div>
      </div>

      <div className="mb-3 container col-md-6">
    <label for="exampleInputPassword1" className="form-label">
        Hotel
        </label>
    <input 
    type="text" 
    className="form-control" 
    onChange={(e)=> setHotel(e.target.value)}
    
    />
  </div>

  <div className="row">
        <div className="col-md-6">
        <div className="mb-3 container col-md-6">
    <label className="form-label">
        Arrival
        </label>
    <input 
    type="date" 
    className="form-control"  
    // aria-describedby="emailHelp"
    onChange={(e)=>setArrival(e.target.value)} 
    />

    
  </div>
        </div>
        <div className="col-md-6">
        <div className="mb-3 container col-md-6">
    <label for="exampleInputPassword1" className="form-label">
        Departure
        </label>
    <input 
    type="date" 
    className="form-control" 
    onChange={(e)=> setDeparture(e.target.value)}
    
    />
  </div>
        </div>
      </div>


      <div className="row">
        <div className="col-md-6">
        <div className="mb-3 container col-md-6">
    <label className="form-label">
        Guests
        </label>
    <input 
    type="text" 
    className="form-control"  
    // aria-describedby="emailHelp"
    onChange={(e)=>setGuests(e.target.value)} 
    />

    
  </div>
        </div>
        <div className="col-md-6">
        <div className="mb-3 container col-md-6">
    <label for="exampleInputPassword1" className="form-label">
        Price
        </label>
    <input 
    type="text" 
    className="form-control" 
    onChange={(e)=> setPrice(e.target.value)}
    
    />
  </div>
        </div>
      </div>



      
      
  
  

  
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>

    </div>
  )
    
}

export default Create