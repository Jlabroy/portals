import React, { Component } from "react";
export default class extends Component {
    state = {
        component: null
    };

    async componentDidMount() {
        const { default: Recordings } = await import("./Recordings");
        this.setState({ component: <Recordings /> });
    }

    render() {
        return this.state.component;
    }
}
