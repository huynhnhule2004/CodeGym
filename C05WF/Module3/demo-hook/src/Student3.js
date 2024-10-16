import { useState } from "react"

export function Student3() {
    let [list, setList] = useState([
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
            age: 27
        }
    ])

    let [idInput, setIdInput] = useState('')
    let [nameInput, setNameInput] = useState('')
    let [ageInput, setAgeInput] = useState('')
    let [isEdit, setIsEdit] = useState(false)
    let [indexEdit, setIndexEdit] = useState(-1)

    const changeId = (e) => {
        let newInput = e.target.value
        setIdInput(newInput)
    }

    const changeName = (e) => {
        let newName = e.target.value
        setNameInput(newName)
    }

    const changeAge = (e) => {
        let newAge = e.target.value
        setAgeInput(newAge)
    }

    const add = () => {
        let newStudent = {
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
        let newList = [...list]
        newList.splice(index, 1)
        setList(newList)
    }

    const showData = (index) => {
        let olData = list[index]
        setIdInput(olData.id)
        setNameInput(olData.name)
        setAgeInput(olData.age)
        setIndexEdit(index)
        setIsEdit(true)

    }

    const edit = () => {
        let newStudent = {
            id: idInput,
            name: nameInput,
            age: ageInput
        }

        let newList = [...list]
        newList[indexEdit] = newStudent
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
            <input type="text" placeholder="Id" value={idInput} onChange={changeId} />
            <input type="text" placeholder="Name" value={nameInput} onChange={changeName} />
            <input type="text" placeholder="Age" value={ageInput} onChange={changeAge} />
            {
                isEdit ? <button onClick={edit}>Edit</button> : <button onClick={add}>Add</button>
            }
            <h1>Danh sách sinh viên</h1>
            {
                list.map((item, index) => (
                    <li key={index}>{item.name} - {item.age} tuổi 
                    <button onClick={() => showData(index)}>Sửa</button><button onClick={() => remove(index)}>Xóa</button></li>
                ))
            }
        </>
    )
}