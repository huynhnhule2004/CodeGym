import { useEffect, useState } from "react"
import baseAxios, { METHOD_HTTP } from "../../../configs/baseAxios"

export function List() {

    const [list, setList] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try{
            const data = await baseAxios(METHOD_HTTP.GET, "/products")
        } catch (e) {
            alert(e.message)
        }
    }
    return (
        <>
            <h1>Đây là List</h1>
        </>
    )


}