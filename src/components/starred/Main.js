import React, { useEffect, useState } from 'react'
import { Tab, Input, Button, Icon } from 'semantic-ui-react'
import Items from './Items'
import { Addemail, CloseDiv, filteredEmail } from '../redux/Action'
import { useDispatch, useSelector } from 'react-redux'
import './Main.css'
function Main() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.rootReducer.emailReducer.Bool);
  const data = useSelector(state => state.rootReducer.emailReducer.email);
  const searchval = useSelector(state => state.rootReducer.emailReducer.searchval);
  const filteredData = useSelector(state => state.rootReducer.emailReducer.filteredEmail)
  const starredData = useSelector(state => state.rootReducer.emailReducer.starredEmail)
  const length = data.length;
  const [input1, setInput1] = useState({
    email: "",
    subject: "",
  })
  useEffect(()=>{
    dispatch(filteredEmail(searchval))
  },[dispatch,searchval])
  const panes = [
    {
      menuItem: 'Primary',
      render: () => (
        <Tab.Pane attached={false}>
          {(searchval && filteredData)? filteredData.map((item, index) => {
            return <Items key={index}
              length={length}
              index={index}
              item={item} />
          }) : starredData?.map((item, index) => {
            return <Items key={index}
              length={length}
              index={index}
              item={item} />
          })}
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Social',
      render: () => <Tab.Pane attached={false}>
        <p>Oops! There no mails</p>
        {/* <Items /> */}
      </Tab.Pane>,
    },
    {
      menuItem: 'Promotions',
      render: () => <Tab.Pane attached={false}>
        <p>Oops! There no mails</p>
        {/* <Items /> */}
      </Tab.Pane>,
    },
  ]
  const handleOnChange = (e) => {
    setInput1({ ...input1, [e.target.name]: e.target.value })
  }
  const addemail = () => {
    dispatch(Addemail(input1))
    dispatch(CloseDiv())
  }
  const closePopup = () => {
    dispatch(CloseDiv())
  }
  return (
    <div>
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      {state && <div className='popup-div'>
        <div className="popup-header">
          <h4>New Message</h4>
          <div>
            <Icon name="minus" />
            <Icon name="expand arrows alternate" />
            <Icon name="close" onClick={closePopup} />
          </div>
        </div>
        <Input placeholder="To" transparent name="email" onChange={handleOnChange} />
        <Input placeholder="subject" transparent name="subject" onChange={handleOnChange} />
        <Button content="Go" onClick={addemail} />
      </div>}

    </div>
  )
}

export default Main