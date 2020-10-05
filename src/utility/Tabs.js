import React, { Component } from 'react'
import './Tabs.css'

export class Tabs extends Component {
    state = {
        activeTab: this.props.children[0].props.label
    }
    changeTab = (tab) => {

        this.setState({ activeTab: tab });
    };
    render() {

        let content;
        let buttons = [];
        return (
            <div>
                {React.Children.map(this.props.children, child => {
                    buttons.push(child.props.label)
                    if (child.props.label === this.state.activeTab) content = child.props.children
                })}

                <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab} />
                <div className="tab-content">{content}</div>

            </div>
        );
    }
}

export default Tabs

export const TabButtons = ({ buttons, changeTab, activeTab }) => {

    return (
        <div className="tab-buttons">
            {buttons.map((button, ind) => {
                return <button className={button === activeTab ? 'active' : ''} onClick={() => changeTab(button)} key={ind}>{button}</button>
            })}
        </div>
    )
}

export const Tab = props => {
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
}

