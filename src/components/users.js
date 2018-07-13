import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import List from 'react-virtualized/dist/commonjs/List'

import User from "./user";
import { getData } from '../redux/actions/data';
import { DATA_TYPE } from '../redux/constants';
import { STYLES, LIST_SETTINGS } from "../config";

import 'react-virtualized/styles.css'

class Users extends PureComponent {
    static propTypes = {
        dataType: PropTypes.string.isRequired,
    };

    componentWillMount() {
        this.props.getData(this.props.dataType);
    }

    rowRenderer = ({key, index, isScrolling, style}) => {
        return (
            <User
                key={key}
                user={this.props.users[index]}
                styles={style} />
        );
    }

    render() {
        console.log(this.props);
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

Users = connect(
    (state) => {
        return {
            [DATA_TYPE[this.props.dataType]]: state[this.props.dataType],
        };
    },
    {
        getData
    }
)(Users);

export default Users;
