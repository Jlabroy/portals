import React, { Component } from "react";
export default class extends Component {
    state = {
        component: null
    };

    async componentDidMount() {
        const { default: History } = await import("./History");
        this.setState({ component: <History /> });
    }

    render() {
        return this.state.component;
    }
}
