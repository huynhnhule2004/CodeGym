import React from "react";

export class DemoEx extends React.Component {
    constructor() {
        super();
        this.state = {
            list: ["Bánh", "Kẹo", "Đồ ăn"],
            data: '',
            isActionEdit: false,
            indexEdit: -1
        }
    }

    add = () => {
        // let newList = this.state.list;
        // newList.push(this.state.data);
        let newList = [...this.state.list, this.state.data];
        this.setState({
            list: newList,
            data: ''
        })
    }

    getData = (event) => {
        let newValue = event.target.value;
        this.setState({
            data: newValue
        })
    }

    removeItem = (index) => {
        let isConfirm = window.confirm("Are you sure?");
        if (isConfirm) {
            this.state.list.splice(index, 1);
            let newList = this.state.list;
            this.setState({
                list: newList
            })
        }
    }

    showDataEdit = (index) => {
        this.setState({
            data: this.state.list[index],
            isActionEdit: true,
            indexEdit: index
        })
    }

    edit = () => {
        let index = this.state.indexEdit;
        let newData = this.state.data;
        let newList = this.state.list;
        newList[index] = newData;
        this.setState({
            list: newList,
            isActionEdit: false,
            indexEdit: -1,
            data: ''
        })
    }

    render() {
        return (
            <>
                <input placeholder="Sản phẩm" value={this.state.data} onChange={(event) => { this.getData(event) }} />
                {this.state.isActionEdit ? <button onClick={() => { this.edit() }}>Edit</button> : <button onClick={this.add}>Add</button>}

                <h2>Data: {this.state.data}</h2>
                <br />
                <br />
                <table border={1}>
                    <tr>
                        <td>#</td>
                        <td>Name</td>
                        <td colSpan={2}>Action</td>
                    </tr>
                    {
                        this.state.list.map((item, index) => (
                            <tr>
                                <td>{index}</td>
                                <td>{item}</td>
                                <td><button onClick={() => { this.removeItem(index) }}>Delete</button></td>
                                <td><button onClick={() => { this.showDataEdit(index) }}>Edit</button></td>
                            </tr>
                        ))
                    }
                </table>
            </>
        )
    }
}


/*
- Cho 1 mảng sản phẩm: "Bánh", "Kẹo", "Đồ ăn"
- Thực hiện thêm dữ liệu vào mảng.
- Thực hiện sửa sản phẩm.
- Thực hiện xóa sản phẩm
[Nâng cao]
- Tìm kiếm sản phẩm.

*/