import React from 'react'

// Functional Component

// const MyButton = () => {
//     return (
//         <div className="button-holder">
//             <button>Click me!</button>
//         </div>
//     );
// };

// state and props
class MyButton extends React.Component {
    state = {
        counter: 0,
    };

    handleClick = () => {
        let addVal = 1;
        console.warn('CLICKED');
        this.setState({
            counter: this.state.counter + addVal
        });
    };

    render() {
        const {counter} = this.state;
        const {buttonTitle, valueName} = this.props;
        // const {valueName} = this.props;
        return (
            <div className="button-holder">
                <button onClick={this.handleClick}>{buttonTitle}</button>
                <p>
                    Current value: {counter} {valueName}
                </p>
            </div>
        )
    }
}


export default MyButton;

