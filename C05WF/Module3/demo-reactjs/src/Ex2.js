import React from "react";

export class Ex2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [
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
            ],
            newStudent: { id: '', name: '', age: '' },
            indexEdit: -1,
            isActionEdit: false,

        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        if (this.state.isActionEdit) {
            this.setState({
                data: { ...this.state.data, [name]: value }
            });
        } else {
            this.setState({
                newStudent: { ...this.state.newStudent, [name]: value }
            });
        }
    };

    handleAdd = () => {
        const { students, newStudent } = this.state;
        const newId = students.length ? students[students.length - 1].id + 1 : 1;
        const updatedStudents = [...students, { ...newStudent, id: newId }];
        this.setState({
            students: updatedStudents,
            newStudent: { id: '', name: '', age: '' }
        });
    };

    removeItem = (index) => {
        let isConfirm = window.confirm("Are you sure?");
        if (isConfirm) {
            this.state.students.splice(index, 1);
            let newList = this.state.students;
            this.setState({
                students: newList
            })
        }
    }

    showDataEdit = (index) => {
        this.setState({
            data: this.state.students[index],
            isActionEdit: true,
            indexEdit: index
        })
    }

    edit = () => {
        let index = this.state.indexEdit;
        let newData = this.state.data;
        let newList = this.state.students;
        newList[index] = newData;
        this.setState({
            students: newList,
            isActionEdit: false,
            indexEdit: -1,
            newStudent: { id: '', name: '', age: '' }

        })
    }

    render() {
        return (
            <>
                {this.state.isActionEdit ? <h1>Sửa sinh viên</h1> : <h1>Thêm sinh viên</h1>}
                <input
                    name="name"
                    placeholder="Tên"
                    value={this.state.isActionEdit ? this.state.data.name : this.state.newStudent.name}
                    onChange={this.handleChange}
                />
                <input
                    name="age"
                    placeholder="Tuổi"
                    value={this.state.isActionEdit ? this.state.data.age : this.state.newStudent.age}
                    onChange={this.handleChange}
                />
                {this.state.isActionEdit ? <button onClick={() => { this.edit() }}>Edit</button> : <button onClick={this.handleAdd}>Add</button>}

                <h1>Danh sách sinh viên </h1>
                <table border={1}>
                    <tr>
                        <td>#</td>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td colSpan={2}>Action</td>
                    </tr>
                    {
                        this.state.students.map((item, index) => (
                            <tr>
                                <td>{index}</td>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
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