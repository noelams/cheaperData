import React, { useState } from "react";
import dataPlans from '../data/dataPlans.json'
import './styles/Subcription.css'

function Subcription() {
  const [selectedProvider, setSelectedProvider] = useState('')
  const [dataPlan, setDataPlan] = useState('')

  const handleSelectChange = (event) => {
    console.log(event.target.value);
    setSelectedProvider(event.target.value)
  };

  const handleDataPlanChange = (event) =>{
    setDataPlan(event.target.value)
  }

  const networkProviders = Object.keys(dataPlans)

  return (
    <form action="" className="form-container">
      <label htmlFor="networkProviders"></label>
      <select name="networkProviders" className="dropdown-menu" onChange={handleSelectChange}>
        <option disabled value={''}>--select an option--</option>
        {networkProviders.map((network, index) => {
          return (
            <option key={index} value={network} className="option">
              {network}
            </option>
          );
        })}
      </select>
      <select name="dataPlans" disabled={!selectedProvider} className="dropdown-menu" onChange={handleDataPlanChange}>
        <option value="" disabled>--select a plan--</option>
        {selectedProvider && dataPlans[selectedProvider].map((plan) =>  {return <option key={plan.planId} value={plan.plamId}>{`${plan.amount} for ${plan.dataSize} - ${plan.validityDays} days`}</option>})}
      </select>
      <input type="number" placeholder="Phone Number"/>
      <button className="subcribe-button">subcribe</button>
    </form>
  );
}

export default Subcription;
