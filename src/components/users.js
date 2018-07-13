import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import List from 'react-virtualized/dist/commonjs/List'
import User from "./user";
import { STYLES, LIST_SETTINGS } from "../config";

import 'react-virtualized/styles.css'

class Users extends PureComponent {
    static propTypes = {
        users: PropTypes.arrayOf(PropTypes.object).isRequired,
    };

    rowRenderer = ({key, index, isScrolling, style}) => {
        return (
            <User
                key={key}
                user={this.props.users[index]}
                styles={style} />
        );
    }

    render() {
        return (
            <div className="users">
                <List
                    width={STYLES.PARENT_WIDTH}
                    height={STYLES.PARENT_HEIGHT}
                    rowHeight={STYLES.ITEM_HEIGHT}
                    overscanRowCount={LIST_SETTINGS.OVERSCAN}
                    rowRenderer={this.rowRenderer}
                    rowCount={this.props.users.length} />
            </div>
        );
    }
}

export default Users;
