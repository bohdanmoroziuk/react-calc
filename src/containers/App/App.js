import React from 'react';
import * as math from 'mathjs';
import './App.css';
import TextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';

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
            input: prevState.input.slice(0, -1) || ''
        }));
    };

    render() {
        const { input } = this.state

        return (
            <div className="calc">
                <div className="calc__body">
                    <TextInput value={input} name="value" readOnly />

                    <div className="calc__keys">
                        <Button name="C" handleClick={this.clearInput} classNames={['button--long']} />
                        <Button name="R" handleClick={this.removeSymbol} classNames={['button--long']} />

                        <Button name="7" handleClick={() => this.addToInput('7')} />
                        <Button name="8" handleClick={() => this.addToInput('8')} />
                        <Button name="9" handleClick={() => this.addToInput('9')} />
                        <Button name="/" handleClick={() => this.addToInput('/')} />

                        <Button name="4" handleClick={() => this.addToInput('4')} />
                        <Button name="5" handleClick={() => this.addToInput('5')} />
                        <Button name="6" handleClick={() => this.addToInput('6')} />
                        <Button name="*" handleClick={() => this.addToInput('*')} />

                        <Button name="1" handleClick={() => this.addToInput('1')} />
                        <Button name="2" handleClick={() => this.addToInput('2')} />
                        <Button name="3" handleClick={() => this.addToInput('3')} />
                        <Button name="-" handleClick={() => this.addToInput('-')} />

                        <Button name="0" handleClick={() => this.addToInput('0')} />
                        <Button name="." handleClick={() => this.addToInput('.')} />
                        <Button name="=" handleClick={() => this.solve()} />
                        <Button name="+" handleClick={() => this.addToInput('+')} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;