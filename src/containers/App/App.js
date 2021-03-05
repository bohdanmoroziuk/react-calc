import React from 'react';
import * as math from 'mathjs';
import './App.css';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        };
    }

    addToInput = value => {
        this.setState(prevState => ({
            input: prevState.input + value
        }));
    }

    solve = () => {
        this.setState(prevState => ({
            input: math.eval(prevState.input)
        }));
    }

    clearInput = () => {
        this.setState({ input: '' });
    }

    removeSymbol = () => {
        this.setState(prevState => ({
            input: prevState.input.toString().slice(0, -1) || ''
        }));
    };

    render() {
        const { input } = this.state

        return (
            <div className="calc">
                <div className="calc__body">
                    <TextInput value={input} name="value" />

                    <div className="calc__keys">
                        <Button label="C" onClick={this.clearInput} long />
                        <Button label="R" onClick={this.removeSymbol} long />

                        <Button label="7" onClick={() => this.addToInput('7')} />
                        <Button label="8" onClick={() => this.addToInput('8')} />
                        <Button label="9" onClick={() => this.addToInput('9')} />
                        <Button label="/" onClick={() => this.addToInput('/')} />

                        <Button label="4" onClick={() => this.addToInput('4')} />
                        <Button label="5" onClick={() => this.addToInput('5')} />
                        <Button label="6" onClick={() => this.addToInput('6')} />
                        <Button label="*" onClick={() => this.addToInput('*')} />

                        <Button label="1" onClick={() => this.addToInput('1')} />
                        <Button label="2" onClick={() => this.addToInput('2')} />
                        <Button label="3" onClick={() => this.addToInput('3')} />
                        <Button label="-" onClick={() => this.addToInput('-')} />

                        <Button label="0" onClick={() => this.addToInput('0')} />
                        <Button label="." onClick={() => this.addToInput('.')} />
                        <Button label="=" onClick={() => this.solve()} />
                        <Button label="+" onClick={() => this.addToInput('+')} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;