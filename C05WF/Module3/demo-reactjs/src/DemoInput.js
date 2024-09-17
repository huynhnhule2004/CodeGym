import React from "react";

export class DemoInput extends React.Component {

    constructor() {
        super();
        this.state = {
            data: '',
            list: ["Linh", "Hoàng", "Thành", "Việt", "Như"],
            dataEdit: '',
            editIndex: null  // Lưu trữ chỉ mục của mục đang chỉnh sửa
        };
    }

    getData = (event) => {
        let newData = event.target.value;
        this.setState({
            data: newData
        });
    }

    add = () => {
        let newData = this.state.data;
        let newList = [...this.state.list];
        newList.push(newData);
        this.setState({
            list: newList,
            data: ''  // Reset dữ liệu nhập sau khi thêm mới
        });
    }

    showEdit = (index) => {
        let oldData = this.state.list[index];
        this.setState({
            dataEdit: oldData,
            editIndex: index  // Lưu lại chỉ mục của mục đang được chỉnh sửa
        });
    }

    editItem = () => {
        if (this.state.editIndex !== null) {  // Kiểm tra nếu đã chọn mục để sửa
            let newList = [...this.state.list];  // Tạo một bản sao của mảng list
            newList[this.state.editIndex] = this.state.dataEdit;  // Cập nhật mục mới trong bản sao
            this.setState({
                list: newList,  // Cập nhật lại state với mảng list mới
                dataEdit: '',  // Xóa dữ liệu sau khi sửa xong
                editIndex: null  // Reset editIndex
            }, () => {
                console.log(this.state.list);  // Log list sau khi state đã được cập nhật
            });
        }
    }

    render() {

        return (
            <>
                <input 
                    placeholder="Nhập dữ liệu" 
                    value={this.state.data}  // Đảm bảo giá trị của ô nhập dữ liệu khớp với state
                    onChange={(event) => { this.getData(event); }} 
                /> 
                <button onClick={this.add}>Thêm mới</button>
                <br />
                
                <input
                    placeholder="Nhập dữ liệu sửa"
                    value={this.state.dataEdit}  // Hiển thị giá trị cần sửa
                    onChange={(event) => { this.setState({ dataEdit: event.target.value }) }}
                />
                <button onClick={this.editItem}>
                    Sửa
                </button>

                <h1>Data: {this.state.data}</h1>
                <h1>Danh sách học viên</h1>
                {
                    this.state.list.map((item, index) => (
                        <div key={index}>
                            <h3>
                                Index: {index} - Name: {item} | 
                                <button onClick={() => { this.showEdit(index) }}>Edit</button>
                            </h3>
                        </div>
                    ))
                }
            </>
        );
    }
}
