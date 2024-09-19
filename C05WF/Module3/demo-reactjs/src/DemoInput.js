import React from "react";


export class DemoInput extends React.Component {

    constructor() {
        super();
        this.state = {
            data: '',
            list: ["Linh", "Hoàng", "Thành", "Việt", "Như"],
            dataEdit: ''
        };
        /*

         list = [
            {
                id: 1,
                name: "Linh",
                age: 26
            },
            {
                id: 2,
                name: "Nhân",
                age: 27
            },
            {
                id: 3,
                name: "Phúc",
                age: 28
            }
        ]


        */
    }

    getData = (event) => { // event là 1 giá trị đại diện cho dữ liệu của sự kiện đang dùng
        let newData = event.target.value;
        this.setState({  // Update state
            data: newData
        })
        // Khi dùng setState => State thay đổi => thì tự động gọi lại render() để hiển thị lại với dữ liệu mới.
    }

    add = () => {
        let newData = this.state.data;
        let newList = this.state.list;
        newList.push(newData);
        this.setState({
            list: newList
        })
    }

    showEdit = (index) => {
        let oldData = this.state.list[index];
        this.setState({
            dataEdit: oldData
        })
    }

    render() {

        return (
            <>
                <input placeholder="Nhập dữ liệu" onChange={(event) => { this.getData(event); }} /> <button onClick={this.add}>Thêm mới</button>
                <br />
                <input placeholder="Nhập dữ liệu sửa" value={this.state.dataEdit} onChange={(event) => {}} /> <button>Sửa</button>

                <h1>Data: {this.state.data}</h1>
                <h1>Danh sách học viên</h1>
                {
                    this.state.list.map((item, index) => (
                        <>
                            <h3>Index: {index} - Name: {item} | <button onClick={() => { this.showEdit(index) }}>Edit</button></h3>
                        </>
                    ))
                }
            </>
        )
    }
}



// item.name, item.id