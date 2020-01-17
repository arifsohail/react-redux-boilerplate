import React, {Component} from "react";
import ManCss from './main.css';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setActiveUsers} from '../../Services/user';
import ErrorBoundry from "../../Componnets/ErrorBoundry/ErrorBoundry";
import withClass from "../../Hoc/withClass";
import CustomTable from '../../Componnets/Table';


class Index extends Component {

    constructor(props) {
        super(props);

        this.state = {
            persons: [
                {id: 'djfdsjfh', name: 'Atif'},
                {id: 'dsjfhsif', name: 'sohail'},
                {id: 'ddgdggsh', name: 'Arif'}
            ],
            inputValue: ""
        };

        this.currentRef = React.createRef();
    }


    componentDidMount() {
        //this.currentRef.focus()
        this.props.setActiveUsers();

    }

    //component did update

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("perv props => ", prevProps);
        console.log("prev state", prevState);
        console.log("snapshot ", snapshot);
    }

    render() {
        return (
            <ErrorBoundry>
                <div className={ManCss.man}>
                        <div className={ManCss.message}>Hi, this is a sample boiler plate please refer to readme to get started</div>
                    <CustomTable users={this.props.users}/>
                </div>
            </ErrorBoundry>
        );
    }
}

Index.propTypes = {
    count: PropTypes.number
};

const mapStateToProps = (state) => {
    return {
        users: state.user_reducer.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setActiveUsers: () => dispatch(setActiveUsers())
    };
};


const connected = connect(mapStateToProps, mapDispatchToProps)(Index);

export default withClass(connected, {});
