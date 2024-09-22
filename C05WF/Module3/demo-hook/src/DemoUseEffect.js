import axios from "axios";
import { useEffect, useState } from "react";


export function DemoUseEffect() {
    const [list, setList] = useState([])
    let [isRunning, setIsRunning] = useState(false)
    const getData = () => {
        axios.get('https://dummyjson.com/todos').then((res) => {
            console.log(res.data.todos);

            let newList = res.data.todos
            console.log(newList);

            setList(newList)
        })
    }

    useEffect(() => {
        getData()
    }, [])
    // <=> ComponentDidMount: Sẽ thực hiện tác vụ 1 lần sau lần render đầu tiên

    // useEffect(() => {
    //     console.log("Use effect 2")
    //     getData();
    // }) // TƯơng tự như componentDidUpdate: thực hiện tác sâu mỗi lần state thay đổi 

    // useEffect(() => {
    //     console.log("Use effect 3")
    //     getData();
    // }, [isRunning]); // Sẽ chạy khi list thay đổi (phụ thuộc vào list)


     // useEffect(() => {
    //     return () => {}
    // }, []) => Tương tự willUnmount

    return (
        <>
            <h1>List To Do</h1>
            <button onClick={() => {
                setIsRunning(!isRunning)
            }}>Click</button>
            <table border={1}>
                <tr>
                    <td>ID</td>
                    <td>To do</td>
                    <td>Completed</td>
                    <td>UserId</td>

                </tr>

                {list.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.todo}</td>
                        <td>{item.completed ? 'Yes' : 'No'}</td>
                        <td>{item.userId}</td>
                    </tr>
                ))}
            </table>
        </>
    )
}

// API (Application Programing Interface): Là nơi cung cấp dữ liệu thông qua các đường dẫn
// => Sinh ra server, cung cấp dịch vụ cho FE sử dụng.


/*
Bài 1: Dùng function component và hook  trong ReactJs. Hoành thành các nhiệm vụ:
- Cho 1 mảng đối tượng sinh viên:
 [
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
- Thực hiện hiển thị danh sách sinh viên.
- Thực hiện thêm dữ liệu.
- Thực hiện sửa sinh viên.
- Thực hiện xóa sinh viên.

Bài 2: Dùng useEffect tương tự demo hiển thi danh sách lấy từ API sau:
https://api.thecatapi.com/v1/images/search?limit=10
*/

