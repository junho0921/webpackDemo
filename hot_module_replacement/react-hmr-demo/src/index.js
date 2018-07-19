import React from 'react';
import {render} from 'react-dom';
import Word from './word';
import './css/index.css';

let App = React.createClass({
    getInitialState: function() {
        window.kkk = 2;// 测试hmr
        return { text:"这是一段文字描述" };
    },
    render: function() {
        return (<div>
                <h4>
                    {this.state.text}
                </h4>
                <h5> webpack is amazing </h5>
                <Word />
            </div>)
    }
});

render(<App />, document.getElementById('app'));
