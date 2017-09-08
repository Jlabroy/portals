import React, { Component } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import History from "../../components/History";
import { setHistory } from "../../actions/History";

class Container extends Component {
    componentDidMount() {
        const { onSetHistory } = this.props;
        onSetHistory('History List');
    }

    render() {
        return <History {...this.props} />;
    }
}

const mapStateToProps = state => state.history;
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            onSetHistory: setHistory
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Container);
