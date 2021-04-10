import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            haserror: false
        };
    }

    componentDidCatch(error,info) {
        this.setState({haserror: true});
    }

    render() {
        if(this.state.haserror) {
           return <h1>Oops! Looks like there is some problem!</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;