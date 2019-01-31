import React from 'react';
import ReactDOM from 'react-dom';
import { Input, Select, Button } from "../Components";

describe('Testing Common Components', () => {

    test('Input renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Input />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Select without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Select />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Button without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Button />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});