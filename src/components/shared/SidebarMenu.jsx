import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import {
    RiPieChart2Fill,
    RiRestaurant2Fill,
    RiAdminFill,
    RiSettingsFill,
    RiLogoutBoxRLine,
} from 'react-icons/ri';
import { FaRegCircleUser } from 'react-icons/fa6';

const SidebarMenu = () => {
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [activeKey, setActiveKey] = useState('1'); 
    const location = useLocation(); 

    const toggleSettings = () => {
        setSettingsOpen(!settingsOpen);
    };

    useEffect(() => {
        const path = location.pathname;
        if (path === '/') {
            setActiveKey('1');
        } else if (path === '/user-management') {
            setActiveKey('2');
        } else if (path === '/restaurant') {
            setActiveKey('3');
        } else if (path === '/administrator') {
            setActiveKey('4');
        }
        else if (path === '/settings') {
          setActiveKey('settings');
        } 
        else if (path === '/terms') {
            setActiveKey('terms');
        } else if (path === '/about') {
            setActiveKey('about');
        } else if (path === '/faqs') {
            setActiveKey('faqs');
        } else if (path === '/privacy') {
            setActiveKey('privacy');
        } else if (path === '/signout') {
            setActiveKey('signout');
        }
    }, [location]);

    return (
        <div className='py-0'>
            <Menu
                style={{ background: '#F6F6F6' }}
                mode='inline'
                selectedKeys={[activeKey]} 
                onSelect={({ key }) => setActiveKey(key)} 
            >
                <Menu.Item
                    key='1'
                    icon={<RiPieChart2Fill size={25} />}
                    className={activeKey === '1' ? '!bg-red-500 !text-white' : ''}
                >
                    <Link to='/' className='text-[18px]'>
                        Dashboard
                    </Link>
                </Menu.Item>
                <Menu.Item
                    key='2'
                    icon={<FaRegCircleUser size={25} />}
                    className={activeKey === '2' ? '!bg-red-500 !text-white' : ''} // Tailwind active style
                >
                    <Link to='/user-management' className='text-[18px]'>
                        Users Management
                    </Link>
                </Menu.Item>
                <Menu.Item
                    key='3'
                    icon={<RiRestaurant2Fill size={25} />}
                    className={activeKey === '3' ? '!bg-red-500 !text-white' : ''} // Tailwind active style
                >
                    <Link to='/restaurant' className='text-[18px]'>
                        Restaurant
                    </Link>
                </Menu.Item>
                <Menu.Item
                    key='4'
                    icon={<RiAdminFill size={25} />}
                    className={activeKey === '4' ? '!bg-red-500 !text-white' : ''} // Tailwind active style
                >
                    <Link to='/administrator' className='text-[18px]'>
                        Administrator
                    </Link>
                </Menu.Item>

                <Menu.SubMenu 
                    className={activeKey === 'settings' ? '!bg-red-500 !text-white' : ''} 
                    key='settings'
                    icon={<RiSettingsFill size={25} />}
                    title={
                      <Link to='/settings' className='flex items-center justify-between w-full'>
                          <span className='text-[18px]'>Settings</span>
                          {/* <RiArrowDownSFill
                              className={`transition-transform duration-300 ${
                                  settingsOpen ? 'transform rotate-180' : ''
                              }`}
                          /> */}
                      </Link>
                  }
                    onTitleClick={toggleSettings}
                    popupClassName='bg-white'
                >
                    <Menu.Item
                        key='terms'
                        className={activeKey === 'terms' ? '!bg-red-500 !text-white' : ''} // Tailwind active style
                    >
                        <Link to='/terms-conditions' className='text-[18px]'>
                            Terms & Conditions
                        </Link>
                    </Menu.Item>
                    <Menu.Item
                        key='about'
                        className={activeKey === 'about' ? '!bg-red-500 !text-white' : ''} // Tailwind active style
                    >
                        <Link to='/about' className='text-[18px]'>
                            About Us
                        </Link>
                    </Menu.Item>
                    <Menu.Item
                        key='faqs'
                        className={activeKey === 'faqs' ? '!bg-red-500 !text-white' : ''} // Tailwind active style
                    >
                        <Link to='/faqs' className='text-[18px]'>
                            FAQs
                        </Link>
                    </Menu.Item>
                    <Menu.Item
                        key='privacy'
                        className={activeKey === 'privacy' ? '!bg-red-500 !text-white' : ''} // Tailwind active style
                    >
                        <Link to='/privacy-policy' className='text-[18px]'>
                            Privacy Policy
                        </Link>
                    </Menu.Item>
                </Menu.SubMenu>

                <Menu.Item
                    key='signout'
                    icon={<RiLogoutBoxRLine size={25} />}
                    className={activeKey === 'signout' ? 'bg-red-500 text-white' : ''} // Tailwind active style
                >
                    <Link to='/login' className='text-[18px]'>
                        Sign Out
                    </Link>
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default SidebarMenu;