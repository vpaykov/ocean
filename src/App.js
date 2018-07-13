import React, { PureComponent } from 'react';

import Users from './components/users';
import { DATA_TYPE } from './redux/constants';

class App extends PureComponent {
    render() {
        return (
            <div className="page">
                <div className="column">
                    <p className="title">users</p>
                    <Users
                        dataType={DATA_TYPE.users} />
                </div>
                <div className="column">
                    <p className="title">reviewers</p>
                    <Users
                        dataType={DATA_TYPE.reviewers} />
                </div>
            </div>
        );
    }
}

export default App;
