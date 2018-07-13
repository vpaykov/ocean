import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class User extends PureComponent {
    static propTypes = {
        user: PropTypes.object.isRequired,
        styles: PropTypes.object.isRequired,
    };

    render() {
        return (
            <div style={this.props.styles} className="user">
                <span className="name">{this.props.user.firstName} {this.props.user.lastName}</span>
                <p className="description">{this.props.user.catchPhrase}</p>
            </div>
        );
    }
}

export default User;
