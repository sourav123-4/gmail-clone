import React, { useState } from 'react';
import { Checkbox, Icon } from 'semantic-ui-react';
import './items.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEmail } from './components/redux/Action';
function Items({ item, index }) {
  const state = useSelector(state => state.rootReducer.emailReducer.searchval);
  console.log("state", state);
  const [show, setShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const dispatch = useDispatch();
  return (
    <div className='items-div' onMouseEnter={() => {
      console.log("nnn",index);
      setActiveIndex(index);
      setShow(true);
    }} onMouseLeave={() => {
      setActiveIndex(-1);
      setShow(false);
    }}>
      <div className='item-first'>
        <Checkbox />
        <Icon name="star outline" className='ico-star' />
        <p className='name'>{item.email}</p>
      </div>
      <p>{item.subject}</p>
      {(index === activeIndex && show) ?
        <div className="">
          <Icon name="archive" ></Icon>
          <Icon name="trash" onClick={()=>dispatch(deleteEmail(item))}></Icon>
          <Icon name="envelope open" ></Icon>
          <Icon name="clock" ></Icon>
        </div> : <p>Time</p>
      }
    </div>
  )
}

export default Items