import React, { Component } from 'react';
import { Menu } from 'antd';

import {
  SmileFilled,
  PhoneFilled ,
  GithubFilled,
  InstagramFilled,
  TwitterCircleFilled ,
  BookFilled
} from '@ant-design/icons';
import { Link } from 'react-router-dom';


const { SubMenu } = Menu;

class Navbar extends Component {
  state = {
    current: 'smiley',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <nav className="menuBar">
      <Menu mode="horizontal">
        <Menu.Item key="smile">
        <SmileFilled />
            <Link to="/TES">About Me</Link> 
        </Menu.Item>
        <Menu.Item key="bookfilled">
        <BookFilled />
          <Link to="/gallery">Gallery</Link>
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <PhoneFilled />
              Contact Me
            </span>
          }
        >
          <Menu.ItemGroup>
            <Menu.Item key="instagram">
            <InstagramFilled />
              <a href="https://instagram.com/fnngrh">
                  Instagram
              </a>
            </Menu.Item>
            <Menu.Item key="twitter">
            <TwitterCircleFilled />
              <a href="https://twitter.com/lohkoqq">
                  Twitter
              </a>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alpp">
          <GithubFilled />
          <a href="https://github.com/fanianugroho">
            Github
          </a>
        </Menu.Item>
      </Menu>
    </nav>
    );
  }
}

export default Navbar;
//cek deploy