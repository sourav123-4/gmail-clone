import { Avatar } from '@mui/material'
import React from 'react'
import { Icon, Dropdown } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { setBoolval } from './redux/Action'
function Slidebar() {
  const dispatch = useDispatch();
  return (
    <div className='slidebar'>
      <button onClick={()=>dispatch(setBoolval())}>
        <div className='compose-btn'>
          <Icon color='grey' name='plus' />
          <p>Compose</p>
        </div>
      </button>
      <div className="stage">
        <div className="item">
          <Icon name="inbox" color="grey" size="large" className='ico' />
          <span className="text">Inbox</span>
          <span className="message">10</span>
        </div>
        <div className="item">
          <Icon name="star" color="grey" size="large" className='ico' />
          <span className="text">Starred</span>
        </div>
        <div className="item">
          <Icon name="send" color="grey" size="large" className='ico' />
          <span className="text">Sent</span>
        </div>
        <div className="item">
          <Icon name="file" color="grey" size="large" className='ico' />
          <span className="text">Draft</span>
        </div>
        <div className="item">
          <Icon name="trash" color="grey" size="large" className='ico' />
          <span className="text">Trash</span>
        </div>
        <div className="item">
          <Icon name="exclamation circle" color="grey" size="large" className='ico' />
          <span className="text">Spam</span>
        </div>
      </div>
      <div className="stage">
        <h4 className="para item">Meet</h4>
        <div className="meet item">
          <Icon name="video" color="grey" size="large" className='ico' />
          <span className="text">New Meet</span>
        </div>
        <div className="item">
          <Icon name="keyboard" color="grey" size="large" className='ico' />
          <span className="text">Join A Meeting</span>
        </div>
      </div>
      <div className="stage">
        <h4 className="para item">Hangouts</h4>
        <div className="meet item">
          <Avatar sx={{ width: 30, height: 30 }} />
          <p>sourav</p>
          <Dropdown text=''>
            <Dropdown.Menu>
              <Dropdown.Item text='ALL' />
              <Dropdown.Item text='None' />
            </Dropdown.Menu>
          </Dropdown>
          <Icon name="plus" color='grey' />
        </div>
      </div>
      <div className="stage">
        <div className="second-last">
          <p>No recent chats</p>
          <p>Start a new one</p>
        </div>
      </div>
      <div className="stage">
        <div className="last">
          <Icon name='user'/>
          <Icon name='quote right'/>
        </div>
      </div>
    </div>  
  )
}

export default Slidebar