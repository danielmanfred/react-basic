import React from 'react'

export default class extends React.Component {
    constructor() {
        super()
        this.state = {
            buttonValue: 'Send form'
        }
    }
    setButtonValue() {
        this.setState({
            buttonValue: 'Dont send form'
        })
    }
    resetButtonValue() {
        this.setState({
            buttonValue: 'Send form'
        })
    }
    render() {
        console.log(this.props)
        return (
            <form>
                <input placeholder={ this.props.placeholderInput }/>
                <button 
                    onMouseOut={ () => this.resetButtonValue() }
                    onMouseOver={ () => this.setButtonValue() }
                >{ this.state.buttonValue }</button>
            </form>
        )
    }
}