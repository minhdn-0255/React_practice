import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom";
import Button from './Button'
import './navbar.css'
import NavLink from './NavLink'
import { NotificationOutlined } from '@ant-design/icons'
import { Popover } from 'antd'
import Notification from './Notification/Notification'

const Navbar = ({ activeNav }) => {
  const [uid, setUid] = useState(0)
  const [avatar, setAvatar] = useState('/accounts/Avatar/default-avatar.png')

  useEffect(() => {
    setUid(Number(localStorage.getItem('uid')))
  }, [])
  useEffect(() => {
    if (uid == 0) setAvatar(`/accounts/Avatar/0.jpg`)
    else setAvatar(`/accounts/Avatar/${uid}.jpg`)
  }, [uid])
  return (
    <div className='navbar'>
      <a href={'/'}>
        <div className='logo-ctn'>
          <img className='logo' src='/logo.jpg' width={55} height={55} alt='Logo' />
          <div className='page-name'>Cheemslender</div>
        </div>
      </a>

      {/* Navigation Tabs */}
      <ul className='nav-links'>
        <li>
          <NavLink text='Home' active={activeNav == 'home'} />
        </li>
        <li>
          <NavLink text='Calendar' active={activeNav == 'calendar'} />
        </li>
        <li>
          <NavLink text='Team' active={activeNav == 'team'} />
        </li>
        <li>
          <NavLink text='About' active={activeNav == 'about'} />
        </li>
      </ul>

      {/* Buttons */}
      <div className='last-nav-ctn'>
        {uid != 0 ? (
          <>
            <Popover content={<Notification />} trigger='click'>
              <NotificationOutlined />
            </Popover>
            <Link className='setting' to='/setting'>
              Setting
            </Link>
            <Popover
              content={
                <div>
                  <p>Help</p>
                  <Button
                    type='secondary'
                    styles={{ padding: '0px' }}
                    onClick={() => {
                      localStorage.removeItem('uid')
                      localStorage.removeItem('name')
                      localStorage.removeItem('username')
                      window.location.replace('/')
                    }}>
                    Sign out
                  </Button>
                </div>
              }
              trigger='click'>
              <img className='avatar' src={avatar} width={48} height={48} alt='avatar' />
            </Popover>
          </>
        ) : (
          <>
            <Button type='secondary'>
              <Link to='/login'>Log In</Link>
            </Button>
            <Button type='primary'>
              <Link to='/signup'>Sign Up</Link>
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar
