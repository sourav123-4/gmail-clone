import React from 'react'
import { Button, Icon, Menu } from 'semantic-ui-react'

function Slidebar() {
  return (
    <div className='slidebar'>
      <button>
        <div className='compose-btn'>
          <Icon color='grey' name='plus' />
          <p>Compose</p>
        </div>
      </button>
      <div className='sliders-main-div'>
      <div className='sliders-div'>
        <Icon name='inbox' />
        <p>Inbox</p>
        <span>4</span>
      </div>
      <div className='sliders-div'>
        <Icon name='star' />
        <p>Starred</p>
        <span>4</span>
      </div>
      <div className='sliders-div'>
        <Icon name='time' />
        <p>Snoozed</p>
        <span>4</span>
      </div>
      <div className='sliders-div'>
        <Icon name='send' />
        <p>Sent</p>
        <span>4</span>
      </div>
      <div className='sliders-div'>
        <Icon name='file' />
        <p>Drafts</p>
        <span>4</span>
      </div>
      </div>
    </div>
  )
}

export default Slidebar