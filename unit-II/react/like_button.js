'use strict'

const e = React.createElement

class LikeButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = { liked: false}
    }

    render() {
        /* if (this.state.liked) {
            return 'You liked this.'
        } */
        var text = ''
        if (this.state.liked) {
            text = 'You liked this.'
        } else {
            text = 'Like'
        }

        // vanilla javascript mode to return a HTML element
        /* return e(
            'button',
            { onClick: () => this.setState({ liked: !this.state.liked })},
            text
        ) */

        // with JSX
        return (
            <button onClick={ () => this.setState({ liked: !this.state.liked })}>{text}</button>
        )
    }
}

const domContainer = document.querySelector('#react_container')
const root = ReactDOM.createRoot(domContainer)
root.render(e(LikeButton))