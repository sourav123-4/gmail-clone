import React, { useState, useEffect } from 'react'
import { Input, Icon, Image } from 'semantic-ui-react';
import { Avatar, IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import {searchval} from './redux/Action'
function Header() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(searchval(search))
  },[search,dispatch])
  return (
    <div className='header'>
      <div className='header-first'>
        <IconButton><Icon name='bars' /></IconButton>
        <Image src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png' />
      </div>
      <div className='header-middle'>
      <Icon name='search' color='grey'/>
      <Input
        className='header-input'
        placeholder='Search mail'
        size='big'
        transparent
        onChange={(e) => setSearch(e.target.value)}
      />
      <Icon name='sliders' size='large' color='grey' />
      </div>
      <div className='header-last'>
        <Icon name='question circle outline' size="large" color='grey' />
        <Icon name='setting' size='large' color='grey' />
        <IconButton><Icon name='th' color='grey' /></IconButton>
        <Avatar sx={{ width: 24, height: 24 }}></Avatar>
      </div>
    </div>
  )
}

export default Header