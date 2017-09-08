import React, { Component } from "react";
export default class extends Component {
    state = {
        component: null
    };

    async componentDidMount() {
        const { default: Home } = await import("./Home");
        this.setState({ component: <Home /> });
    }

    render() {
        return this.state.component;
    }
}
