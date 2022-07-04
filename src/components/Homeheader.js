import React from 'react'
import { Checkbox, Dropdown, Icon } from 'semantic-ui-react'
function Homeheader() {
    return (
        <div className='homeheader'>
            <div className='homeheader-left'>
                <div className='checkbox-main'>
                    <Checkbox label='' />
                    <Dropdown text=''>
                        <Dropdown.Menu>
                            <Dropdown.Item text='ALL' />
                            <Dropdown.Item text='None' />
                            <Dropdown.Item text='Read' />
                            <Dropdown.Item text='Unread' />
                            <Dropdown.Item text='Starred' />
                            <Dropdown.Item text='Unstarred' />
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <Icon name="redo" />
                <Icon name='ellipsis vertical' />
            </div>
            <div className="homeheader-right">
                <span>1 - 50 of 90</span>
                <Icon name='angle left' />
                <Icon name='angle right' />
            </div>
        </div>
    )
}

export default Homeheader