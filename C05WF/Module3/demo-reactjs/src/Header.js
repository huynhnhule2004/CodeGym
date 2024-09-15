import React from "react";
import { Logo } from "./Logo";

export class Header extends React.Component { // Class Component

    render() {
        let name = "Linh C05"

        return (
            // <div>
            //     <h1 
            //     style={{fontSize: "20px", marginLeft: "20px"}}
            //     className="hello" 
            //     >Hello {name}</h1>
            //     <input />
            // </div>
            <>
                <Logo />
                <h1 style={{ backgroundColor: "red", color: "blue" }}>Component Header</h1>
                <hr></hr>
            </>
        )
    }
}

// Các thành phần trả về từ các Component có cú pháp tương tự như HTML nhưng bản chất JSX;
// Các thẻ Jsx phải có thẻ đóng, các cú pháp sẽ tương tự kiểu đối tượng

// Ctrl + Alt + F
// Mở terminal: Ctrl + Shift + `