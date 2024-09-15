import React from "react";
import { Header } from "./Header"
import { Content } from "./Content";
import { Footer } from "./Footer";
export class Home extends React.Component {
    render() {
        return(
            <>
            <Header/>
            <Content/>
            <Footer/>
            </>
        )
    }
}