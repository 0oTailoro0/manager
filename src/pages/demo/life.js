import React, {Component} from 'react';
import './style.less';
import { Button } from 'antd';

class Life extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    render() {
        return (
            <div className='con' onClick={()=>{this.setState({count:this.state.count+1})}}>
                {this.state.count}
                <Button type="primary">Primary</Button>
                <a href="#">sdfas</a>
            </div>
        );
    }
}

export default Life;
