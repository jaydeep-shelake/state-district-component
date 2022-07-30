import React from 'react'
import {states,districts} from './data'

export const States = ({className,styles,onChange}) => {
  const style={...styles}
  const stateList = states.map(state=>{return<option value={state} key={state}>{state}</option>})
  return (
    <>
    <input className={className} onChange={e=>{onChange(e.target.value)}} style={style?style:""} type="text" list='state-dist-input'/>
    <datalist id='state-dist-input'>
      {stateList}
    </datalist>
    </>
    
  )
}

export const Districts = ({className,style,state,onChange}) => {
    const districtsList= districts.filter(elem=>elem.state===state)
    const currentDistricts= districtsList?.map(elem=>elem.dists)
    const dists = currentDistricts[0]?.map(dis=>{ return <option key={dis}>{dis}</option>})
  return (
    <>
     <input className={className} onChange={(e)=>{onChange(e.target.value)}}  style={style?style:{width:'100%'}} type="text" list='dist-input'/>
    <datalist id='dist-input'>
      {dists}
    </datalist>
    </>
  )
}

export const allStates = states;
export const allDistricts=districts;
