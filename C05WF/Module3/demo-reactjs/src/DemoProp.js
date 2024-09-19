import React from "react";


export class DemoProp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <>
                <h2>Demo Prop</h2>
                <h2>Hello {this.props.name} - Age {this.props.age}</h2>
            </>
        )
    }
}

// LifeCycle: là tập hợp các function thực thi trong chu kỳ sống của Compnent
// constructor và render

// Sinh ra => Lớn lên ... => Chết đi
// Mounting => Updating... => Unmounting