
import React from "react";


export class Content extends React.Component {

    constructor() {
        super(); // khởi tạo ra các thành phần từ lớp cha (React.Component) cho lớp con (Content) sử dụng.
        this.state = { // Là 1 đối tượng đặc biệt cho phép tạo và quản lý dữ liệu ở trong nội bộ Component
            count: 1,
            name: "Linh"
        };
    }

    increment = () => {
        this.setState(
            {
                count: this.state.count + 1
            }
        ) // Cập nhật state: thông qua hàm setState
    }

    change = () => {
            this.setState(
                {
                    name: "Phúc"
                }
            )
    }

    render() {

        return (
            <>
                <h1>Count: {this.state.count}</h1>
                <h2>Name: {this.state.name}</h2>
                <button onClick={this.increment}>Tăng</button>
                <button onClick={this.change}>Thay đổi</button>
            </>
        )
    }
}

// Khi khởi tạo 1 class component => gọi constructor => Mới khởi tạo state nằm trong 1 đối tượng cụ thể của class component
// prop
