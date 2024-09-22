import { useState } from "react";

export function Home(props) {
    let [name, setName] = useState("")
    let [list, setList] = useState([
        {
            id: 1,
            name: "Nhu"
        },
        {
            id: 2,
            name: "Linh"
        }
    ])
    const getName = (event) => {
        let newName = event.target.value
        setName(newName)
    }
    return (
        <>
            <input onChange={(event) => { getName(event) }} placeholder="Name"/>
            <h1>Hello, {name}</h1>
            <h1>Prop: {props.data}, {props.data2}</h1>
            {
                list.map((item) => (
                    <>
                        <h2>Id: {item.id}, Name: {item.name}</h2>
                    </>
                ))
            }
        </>
    )
}