import React,{ useState } from 'react'
import { Input, Icon, Image } from 'semantic-ui-react';
import { Avatar, IconButton } from '@mui/material';
function Header() {
    const [search, setSearch] = useState("")
    return (
        <div className='header'>
            <div className='header-first-icon'>
            <IconButton><Icon name='bars' /></IconButton>
            <Image src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png' />
            </div>
            <Input
                icon={<Icon name='search' circular link onClick={() => console.log("hii")} />}
                className='header-input'
                placeholder='Search mail'
                size='big'
                transparent
                onChange={(e) => setSearch(e.target.value)}
            />
            <Icon name='sliders' size='large' />
            <div className='header-last-icon'>
            
            <Icon name='question circle outline' size="large" />
            <Icon name='setting' size='large' />
            <Icon name='th' />
            <Avatar sx={{ width: 24, height: 24 }}></Avatar>
            </div>
        </div>
    )
}

export default Header