import { useState } from "react"

export function Student2() {
    const [list, setList] = useState([
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
    ])

    const [idInput, setIdInput] = useState('')
    const [nameInput, setNameInput] = useState('')
    const [ageInput, setAgeInput] = useState('')
    const [indexEdit, setIndexEdit] = useState(-1)
    const [isEdit, setIsEdit] = useState(false)

    const changeIdInput = (event) => {
        setIdInput(event.target.value)
    }

    const changeNameInput = (event) => {
        setNameInput(event.target.value)
    }

    const changeAgeInput = (event) => {
        setAgeInput(event.target.value)
    }

    const add = () => {
        const newStudent = {
            id: idInput,
            name: nameInput,
            age: ageInput
        }
        setList([...list, newStudent])
        setIdInput('')
        setNameInput('')
        setAgeInput('')
    }

    const remove = (index) => {
        let isConfirm = window.confirm('Are you sure you want to remove');
        if (isConfirm) {
            const newList = [...list]
            newList.splice(index, 1)
            setList(newList)
        }
    }

    const showDataEdit = (index) => {
        let oldStudent = list[index]
        setIdInput(oldStudent.id)
        setNameInput(oldStudent.name)
        setAgeInput(oldStudent.age)
        setIndexEdit(index)
        setIsEdit(true)
    }

    const edit = () => {
        let index = indexEdit
        let newList = [...list]
        let newStudent = {
            id: idInput,
            name: nameInput,
            age: ageInput
        }

        newList[index] = newStudent
        setList(newList)
        setIdInput('')
        setNameInput('')
        setAgeInput('')
        setIsEdit(false)
        setIndexEdit(-1)
    }

    return (
        <>
            {
                isEdit ? <h1>Sửa sinh viên</h1> : <h1>Thêm sinh viên</h1>
            }
            <input type="text" placeholder="Id" value={idInput} onChange={changeIdInput} />
            <input type="text" placeholder="Name" value={nameInput} onChange={changeNameInput} />
            <input type="number" placeholder="Age" value={ageInput} onChange={changeAgeInput} />
            {
                isEdit ? <button onClick={edit}>Sửa</button> : <button onClick={add}>Add</button>
            }

            <h1>Danh sách sinh viên </h1>
            <table border={1}>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Tuổi</th>
                    <th colSpan={2}>Thao tác</th>
                </tr>
                {
                    list.map((item, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td><button onClick={() => showDataEdit(index)}>Sửa</button></td>
                            <td><button onClick={() => remove(index)}>Xóa</button></td>
                        </tr>
                    ))
                }
            </table>

        </>
    )
}