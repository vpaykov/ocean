import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { InfiniteLoader, List } from 'react-virtualized';

import User from "./user";
import { getData } from '../redux/actions/data';
import { STYLES, LIST_SETTINGS } from "../config";

import 'react-virtualized/styles.css'

class Users extends PureComponent {
    static propTypes = {
        dataType: PropTypes.string.isRequired,
    };

    componentWillMount = () => {
        this.props.getData(this.props.dataType, LIST_SETTINGS.START_INDEX, LIST_SETTINGS.STOP_INDEX);
    }

    isRowLoaded = ({ index }) => !!this.props[this.props.dataType][index];

    loadMoreRows = ({ startIndex, stopIndex }) => {
        this.props.getData(this.props.dataType, startIndex, stopIndex);
    }

    rowRenderer = ({key, index, isScrolling, style}) => {
        return (
            <User
                key={key}
                user={this.props[this.props.dataType][index]}
                styles={style} />
        );
    }

    render() {
        if (this.props[this.props.dataType].length) {
            return (
                <div className="users">
                    <InfiniteLoader
                        isRowLoaded={this.isRowLoaded}
                        loadMoreRows={this.loadMoreRows}
                        rowCount={LIST_SETTINGS.REMOTE_AMOUNT} >
                            {({ onRowsRendered, registerChild }) => (
                                <List
                                    onRowsRendered={onRowsRendered}
                                    ref={registerChild}
                                    width={STYLES.PARENT_WIDTH}
                                    height={STYLES.PARENT_HEIGHT}
                                    rowHeight={STYLES.ITEM_HEIGHT}
                                    overscanRowCount={LIST_SETTINGS.OVERSCAN}
                                    rowRenderer={this.rowRenderer}
                                    rowCount={this.props[this.props.dataType].length} />
                            )}
                    </InfiniteLoader>
                </div>
            );
        } else {
            return (
                <div className="users">
                    <span className="loading">loading...</span>
                </div>
            );
        }
    }
}

Users = connect(
    (state, props) => {
        return {
            [props.dataType]: state[props.dataType],
        };
    },
    {
        getData
    }
)(Users);

export default Users;
