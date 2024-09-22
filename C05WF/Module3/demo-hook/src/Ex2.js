import axios from "axios";
import { useEffect, useState } from "react";


export function Ex2() {
    const [list, setList] = useState([])
    const getData = () => {
        axios.get('https://api.thecatapi.com/v1/images/search?limit=10').then((res) => {
            console.log(res.data);

            let newList = res.data
            console.log(newList);

            setList(newList)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <h1>images</h1>
            {
                list.map((item, index) => (
                    <div key={index}>
                        <p>{item.id}</p>
                        <p>{item.width}x{item.height}</p>
                        <img src={item.url} alt="" width={item.width} height={item.height}/>
                    </div>
                ))
            }
        </>
    )
}


