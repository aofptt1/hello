import React, { Component } from 'react';
class SayHello extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
            <h1> สวัสดีคุณ {this.props.name}</h1>
            <h3> อาบุ {this.props.age}</h3>
            </div>
            
        );
    }
}

export default SayHello;