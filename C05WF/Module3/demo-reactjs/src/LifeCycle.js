import React from "react";

export class LifeCycle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.inter = null;
        console.log("1.Constructor")
    }

    componentDidMount() { // chạy 1 lần sau render đầu tiên
        console.log("3.ComponentDidMount");
        this.inter = setInterval(() => {
            this.setState({ // Khi cập nhật state (setState) => gọi render => sinh ra đữ liệu mới
                count: this.state.count + 1
            })
            console.log(this.state.count);
        }, 1000);
        // this.setState({ // Khi cập nhật state (setState) => gọi render => sinh ra đữ liệu mới
        //     count: 10
        // })
    }
    // chạy cuối tại thời điểm mouting
    // thường sử dụng để cập nhật dữ liệu (có thể là lấy dữ liệu BE)

    componentDidUpdate() {
        console.log("4.Updating componentDidUpdate"); // không nên sử dụng setState ở trong đây
    }

    componentWillUnmount() {
        console.log("5.Unmounting componentWillUnmount");
        clearInterval(this.inter);
    }

    render() {
        console.log("2.Render")
        return (
            <>
                <h1>Demo LifeCycle</h1>
                <h1>Count: {this.state.count}</h1>
            </>
        )
    }
}

// Mounting =>