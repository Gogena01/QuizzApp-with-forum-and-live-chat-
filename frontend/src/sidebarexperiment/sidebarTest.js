//import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import React from 'react';
//import { ProSidebarProvider } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';
//import { BiBarChartSquare } from "react-icons/bi";
import './side.css'
import Exercise1 from '../exercise1/exercise1';
import { Sidebar, Menu, ProSidebarProvider, MenuItem, SubMenu } from 'react-pro-sidebar';
import Exercise2 from '../exercsie2/exercise2';



class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        } else {
            this.setState({ currentComponent: newComponent, contentText: 'hll' });
        }
    }

    render() {

        return (
            <div style={{ display: 'flex' }}>
                <ProSidebarProvider>
                    <div style={{backgroundColor: ''}}>
                    <Sidebar backgroundColor='#d2d8e6' className='sideB' rootStyles={{
                        height: '1000px',
                        fontSize: '23px',
                        width: "5cm",
                        border:'inherit',
                    }}>
                        <Menu>
                            <BarSide handleLinkClick={this.handleSidebarLinkClick} />
                        </Menu>
                    </Sidebar>
                    </div>
                </ProSidebarProvider>



                <QuestionContent text={this.state.contentText} currentComponent={this.state.currentComponent} style={{ marginLeft: '15px' }} />
                <AnotherComponent data={this.state.data} currentComponent={this.state.currentComponent} style={{ marginLeft: '10px' }} />
                





            </div >
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
                <SubMenu style={{color:'#416dd2', fontFamily:'100px'}} label='Javascript'>
                    <MenuItem id='menuItem'>
                        <NavLink onClick={this.handleClick} data-value='QuestionContent' >Exercising</NavLink>
                    </MenuItem>
                    <br />
                    <MenuItem id='menuItem'>
                        <NavLink onClick={this.handleClick} data-value='AnotherComponent' >Exercises</NavLink>
                    </MenuItem>

                </SubMenu>
            </div>
        );
    }
}

class QuestionContent extends React.Component {
    render() {
        if (this.props.currentComponent === 'QuestionContent') {
            return (
                <div>
                    <h1 className='startText'>You can try practice some of your favourite programming languages!</h1>
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
                    <Exercise1 exerciseId={0} />
                </div>


            );
        }

    }
}







export default ParentComponent