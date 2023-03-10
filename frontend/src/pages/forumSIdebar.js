import React, { useState, Component } from 'react';
import './forum.css';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
    CDBSidebarFooter,

} from 'cdbreact';

import { AiOutlineArrowDown } from 'react-icons/fa';
import { BiArrowToBottom, BiBook, BiDiamond } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import ForumTemplate from './forum';
import Main from './forum';
import HomeTemplate from './lessonsHome';
import Quiz from '../stepsToSuccess/stepsToSuccess';


class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubmenuOpen: false,
            currentComponent: 'QuestionContent',
            data: {
                title: 'Helo',
                description: 'Okay'
            },
            contentText: 'Initial Content'
        };
    }

    handleSidebarLinkClick = (newComponent) => {
        if (newComponent === 'QuestionContent') {
            this.setState({ currentComponent: newComponent, contentText: 'Content for QuestionContent' });
        } else if (newComponent === 'AnotherComponent') {
            this.setState({ currentComponent: newComponent, contentText: 'hELLOOOOO' });
        } else if (newComponent === 'Forum') {
            this.setState({ currentComponent: newComponent, contentText: 'hll' });
        }
    }

    toggleSubmenu = () => {
        this.setState((prevState) => ({
            isSubmenuOpen: !prevState.isSubmenuOpen,
        }));
    };

    render() {
        return (
            <div style={{ height: '980px', display: 'flex' }}>
                <CDBSidebar style={{
                    height: '1000px',
                    fontSize: '15px',
                    width: "3cm",
                    border: 'inherit'
                }}>
                    <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Forum</CDBSidebarHeader>
                    <CDBSidebarContent>
                        <CDBSidebarMenu>
                            <CDBSidebarMenuItem
                                icon="th-large"
                                onClick={this.toggleSubmenu}
                            >
                                Lessons <BiArrowToBottom />
                            </CDBSidebarMenuItem>
                            <CDBSidebarSubmenu
                                className={`submenu ${this.state.isSubmenuOpen ? 'open' : ''}`}
                            >

                                <BarSide handleLinkClick={this.handleSidebarLinkClick} />
                            </CDBSidebarSubmenu>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>

                    <CDBSidebarFooter style={{ textAlign: 'center' }}>
                        <div
                            className="sidebar-btn-wrapper"
                            style={{ padding: '20px 5px' }}
                        >
                            Learn new knowledge
                        </div>
                    </CDBSidebarFooter>
                </CDBSidebar>


                <QuestionContent text={this.state.contentText} currentComponent={this.state.currentComponent} style={{ marginLeft: '15px' }} />
                <AnotherComponent data={this.state.data} currentComponent={this.state.currentComponent} style={{ marginLeft: '10px' }} />
                <Forum data={this.state.data} currentComponent={this.state.currentComponent} style={{ marginLeft: '15px' }} />


            </div>
        );
    }
}

class BarSide extends React.Component {
    handleClick = (event) => {
        this.props.handleLinkClick(event.target.getAttribute('data-value'));
        event.target.className = 'active'
    }
    render() {
        return (
            <div>
                <CDBSidebarMenuItem  >
                    <Link onClick={this.handleClick} data-value='Forum'><BiBook /> Forum</Link>
                </CDBSidebarMenuItem>
                <CDBSidebarMenuItem >
                    <Link onClick={this.handleClick} data-value='AnotherComponent'><BiDiamond />Ideas</Link>
                </CDBSidebarMenuItem>
            </div>
        );
    }
}


class QuestionContent extends React.Component {
    render() {
        if (this.props.currentComponent === 'QuestionContent') {
            return (
                <div>
                    <HomeTemplate />
                </div>
            );
        }

    }
}

class AnotherComponent extends React.Component {
    render() {

        if (this.props.currentComponent == 'AnotherComponent') {
            return (
                <div>
                    <Quiz />
                </div>


            );
        }

    }
}




class Forum extends React.Component {
    render() {

        if (this.props.currentComponent == 'Forum') {
            return (
                <>

                    <div>
                        <h1>This is the place where you can improve your knowledge about programming</h1>
                        <br />
                        <ForumTemplate />
                    </div>
                </>

            );
        }

    }
}




class CDBSidebarSubmenu extends Component {
    render() {
        return (
            <ul className={this.props.className}>
                {this.props.children}
            </ul>
        );
    }
}

class CDBSidebarSubmenuItem extends Component {
    render() {
        return (
            <li>
                {this.props.children}
            </li>
        );
    }
}

export default Sidebar;

