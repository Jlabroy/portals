import React, { Component } from "react";
export default class extends Component {
    state = {
        component: null
    };

    async componentDidMount() {
        const { default: Numbers } = await import("./Numbers");
        this.setState({ component: <Numbers /> });
    }

    render() {
        return this.state.component;
    }
}
