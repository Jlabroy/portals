import React, { Component } from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

const Wrapper = Styled('div')`
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #fff;
`;

const Header = Styled('div')`
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #ccc;
`;

const Body = Styled('div')`
    padding: 10px;
`;

class Block extends Component {
    static propTypes = {
        header: PropTypes.string,
        children: PropTypes.string.isRequired
    };

    static defaultProps = {
        header: false
    };

    render() {
        const { header, children } = this.props;

        return (
            <Wrapper>
                {header && <Header>{header}</Header>}
                <Body>{children}</Body>
            </Wrapper>
        )
    }
}

export default Block;
