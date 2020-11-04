import React, { useState } from 'react';
import './App.css';
import Subs from './Subs';
import { GoDiffAdded } from 'react-icons/go'

function App() {

  const [data, setData] = useState({
    subName: "",
    subDate: "",
    subType: "",
  })

  const [subs, setSubs] = useState([])

  const handleChange = (event) => {
    const value = event.target.value;
    setData({
      ...data,
      [event.target.name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    data.id = Math.floor(Math.random() * 10000)
    const newSubs = [data, ...subs]
    setSubs(newSubs)
    setData({
      subName: '',
      subDate: '',
      subType: ''
    })
    console.log(subs)
  }

  const removeSub = id => {
    const removeArr = [...subs].filter(sub => sub.id !== id)

    setSubs(removeArr)
  }

  return (
    <div className="sub-app">
      <div className="form-container">
        <h1>Enter your subscription</h1>
        <form onSubmit={handleSubmit} autoComplete='off'>
          <input type="text" className='sub-name' name='subName' value={data.subName} onChange={handleChange} placeholder='Your subscription' />
          <input type="date" className='sub-date' name='subDate' value={data.subDate} onChange={handleChange} />
          <select className='sub-type' name='subType' value={data.subType} onChange={handleChange}>
            <option value="" defaultValue disabled hidden>Type</option>
            <option value="Yearly">Yearly</option>
            <option value="Monthly">Monthly</option>
            <option value="Weekly">Weekly</option>
            <option value="Daily">Daily</option>
          </select>
          <button type='submit' className='btn-submit'><GoDiffAdded className='add-icon' size={20} color='#fff' /></button>
        </form>
      </div>
      <div className="subs-container">
        <Subs subsList={subs} removeSub={removeSub} />
      </div>
    </div>
  );
}

export default App;
