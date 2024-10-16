import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export function List() {
    const [list, setList] = useState([])

    const getData = () => {
        axios.get('http://localhost:3000/products').then((res) => {
            let { data } = res
            setList(data)

        })
    }
    useEffect(() => {
        getData();
    }, [])

    const remove = (id) => {

        axios.delete("http://localhost:3000/products/" + id).then(() => {
            alert("Xóa thành công");
            getData();
        })
    }

    return (
        <>
            <h1>Danh sách sản phẩm</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td><img src={item.img} alt="Img" width={100} height={100} /></td>
                                <td>{item.price}</td>
                                <td>{item.stock}</td>
                                <td colSpan={3}>
                                    <Link to={"/home/detail/" + item.id}><button>Detail</button></Link>
                                    <Link to={"/home/edit/" + item.id}><button>Edit</button></Link>
                                    <button onClick={() => { remove(item.id) }}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </>
    )
}