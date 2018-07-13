import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Users from './components/users';
import { getData } from './redux/actions/data';
import { DATA_TYPE } from './redux/constants';

class App extends PureComponent {
    componentWillMount() {
        this.props.getData(DATA_TYPE.USERS);
        this.props.getData(DATA_TYPE.REVIEWERS);
    }

    render() {
        if (this.props.users.length && this.props.reviewers.length) {
            return (
                <div className="page">
                    <div className="column">
                        <p className="title">users</p>
                        <Users users={this.props.users}/>
                    </div>
                    <div className="column">
                        <p className="title">reviewers</p>
                        <Users users={this.props.reviewers}/>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="page">
                    <span className="loading">Loading...</span>
                </div>
            );
        }
    }
}

App = connect(
    (state) => {
        return {
            users: state.users.users,
            reviewers: state.reviewers.reviewers,
        };
    },
    {
        getData
    }
)(App);

export default App;
