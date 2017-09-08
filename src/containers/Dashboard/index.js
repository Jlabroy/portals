import React, { Component } from "react";
export default class extends Component {
    state = {
        component: null
    };

    async componentDidMount() {
        const { default: Dashboard } = await import("./Dashboard");
        this.setState({ component: <Dashboard /> });
    }

    render() {
        return this.state.component;
    }
}
