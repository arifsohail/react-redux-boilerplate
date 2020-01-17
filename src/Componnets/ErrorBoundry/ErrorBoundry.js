import React, {Component} from "react";

class ErrorBoundry extends Component {
    state = {
        error: false,
        errorMessage: ''
    };

    componentDidMount() {
    }
    /*
    * For un expected states*/
    componentDidCatch(error, errorInfo) {
        console.log("error", error, "errorInfo", errorInfo);
        this.setState(
            {
                error: true,
                errorMessage: error
            }
        );
    }

    render() {
        if (this.state.error) {
            return <div>
                <h1>
                    {this.state.errorMessage}
                </h1>
            </div>;
        } else {
            return this.props.children;
        }
    }
};


export default ErrorBoundry;
