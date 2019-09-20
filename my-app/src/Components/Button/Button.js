import React from 'react'

// Functional Component
// const MyButton = () => {
//     return (
//         <div className="button-holder">
//             <button>Click me!</button>
//         </div>
//     );
// };

// state component (MAYBE)
class MyButton extends React.Component {
    state = {
        counter: 0,
    };

    handleClick = () => {
        let addVal = 5;
        console.warn('CLICKED');
        this.setState({
            counter: this.state.counter + addVal
        });

        // this.setState(function (state) {
        //     return {
        //         counter: state.counter + 1
        //     }
        // })

    };

    render() {
        return (
            <div className="button-holder">
                <button onClick={this.handleClick}>Click me!</button>
                <p>
                    Current value: {this.state.counter}
                </p>
            </div>
        )
    }
}


export default MyButton;

