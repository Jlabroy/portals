import React, { Component } from "react";
export default class extends Component {
    state = {
        component: null
    };

    async componentDidMount() {
        const { default: Settings } = await import("./Settings");
        this.setState({ component: <Settings /> });
    }

    render() {
        return this.state.component;
    }
}
