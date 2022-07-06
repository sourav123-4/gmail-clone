import React, { useState } from 'react';
import { Checkbox, Icon } from 'semantic-ui-react';
import './Items.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEmail, starredEmailRemove, reversestarboolval } from '../redux/Action';
function Items({ item, index }) {
  const [show, setShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const dispatch = useDispatch();
  const checkval = useSelector(state => state.rootReducer.emailReducer.checkBool);
  const handlereverseStar = ()=>{
    dispatch(reversestarboolval())
    dispatch(starredEmailRemove(item))
  }
  return (
    <div className='items-div' onMouseEnter={() => {
      setActiveIndex(index);
      setShow(true);
    }} onMouseLeave={() => {
      setActiveIndex(-1);
      setShow(false);
    }}>
      <div className='item-first'>
        <Checkbox checked={checkval} />
        <Icon name='star' onClick={handlereverseStar}/>
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