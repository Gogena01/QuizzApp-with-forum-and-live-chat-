import React, { Component } from "react";

class Movies extends Component {
    render() {
        return (
            <>
                <h2>Movies</h2>
                <ul>
                    <Movie name='Star Wars' />
                    <Movie name='Harry Potter' />
                    <h2>Hello</h2>
                </ul>
            </>
        )
    }

}

class Movie extends Component {
    render() {
        return (
            <li>
                {this.props.name}
            </li>
        )
    }
}

export default Movies     