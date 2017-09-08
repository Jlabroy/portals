import React, { Component } from "react";
import Block from "../Styled/Block";

class History extends Component {
    render() {
        const { data } = this.props;
        return (
            <Block header="History">
                {data}
            </Block>
        )
    }
}

export default History;
