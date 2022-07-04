import React from 'react'
import { Checkbox, Icon } from 'semantic-ui-react'
import './items.css'
import { useSelector } from 'react-redux'
function Items() {
    const state=useSelector(state => state.rootReducer.emailReducer.email)
    console.log(state)
    return (
        <div className='items-div'>
            <div className='item-first'>
                <Checkbox />
                <Icon name="star outline" className='ico-star'/>
                <p className='name'>{state.email}</p>
            </div>
            <p>{state.subject}</p>
            <p>Time</p>
        </div>
    )
}

export default Items