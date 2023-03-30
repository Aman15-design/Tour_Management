import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


const Update = () => {

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [destination, setDestination] = useState("")
  const [hotel, setHotel] = useState("")
  const [arrival, setArrival] = useState("")
  const [departure, setDeparture] = useState("")
  const [guests, setGuests] = useState(0)
  const [price, setPrice] = useState(0)

    const navigate = useNavigate();

    useEffect(() => {
      setId(localStorage.getItem("id"));
      setName(localStorage.getItem("name"));
      setDestination(localStorage.getItem("destination"));
      setHotel(localStorage.getItem("hotel"));
      setArrival(localStorage.getItem("arrival"));
      setDeparture(localStorage.getItem("departure"));
      setGuests(localStorage.getItem("guests"));
      setPrice(localStorage.getItem("price"));


      

      
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://642277d477e7062b3e1a4cf6.mockapi.io/crud-react/${id}`,
        {
            name: name,
            destination: destination,
            hotel: hotel,
            arrival: arrival,
            departure: departure,
            guests: guests,
            price: price,
        }).then(()=> {
            navigate("/read")
        }

        )
    }
    

  return (
    <>
    <h2 className='hk'>--------  Update  --------</h2>

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
    value={name}
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
    value={destination}
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
    value={hotel}
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
    value={arrival}
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
    value={departure}
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
    value={guests}
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
    value={price}
    onChange={(e)=> setPrice(e.target.value)}
    
    />
  </div>
        </div>
      </div>



      
      
  
  

  
  <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Update</button>
</form>



























    {/* <form>
  <div className="mb-3 container">
    <label className="form-label">
        Email address
        </label>
    <input 
    type="email" 
    className="form-control"  
    value = {email}
    onChange={(e)=>setEmail(e.target.value)} 
    />

    
  </div>
  <div className="mb-3 container">
    <label for="exampleInputPassword1" className="form-label">
        Name
        </label>
    <input 
    type="text" 
    className="form-control" 
    value={name}
    onChange={(e)=> setName(e.target.value)}
    
    />
  </div>

  
  <button type="submit" className="btn btn-primary" 
  onClick={handleUpdate}
  >Update</button>
</form> */}
    </>
  )
}

export default Update