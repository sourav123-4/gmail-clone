import React, { useState } from 'react';
import { Checkbox, Dropdown, Icon } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { deleteAllEmail, checkboxCheck } from '../components/redux/Action';
function Homeheader() {
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteAllEmail())
        setChecked(false)
        
    }
    const changeBool = ()=>{
        setChecked((c) => !c)
        dispatch(checkboxCheck(!checked))
    }
    return (
        <div className='homeheader'>
            <div className='homeheader-left'>
                <div className='checkbox-main'>
                    <Checkbox label='' checked={checked}
                        onClick={changeBool} />
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
                {
                    checked ?
                        <div>
                            <Icon name='archive' />
                            <Icon name='exclamation circle' />
                            <Icon name='trash' onClick={handleDelete} />
                            <Icon name='mail' />
                            <Icon name='wait' />
                            <Icon name='ellipsis vertical' />
                        </div> : <div><Icon name="redo" />
                            <Icon name='ellipsis vertical' /></div>
                }
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