import React from "react";
import { useState, useEffect } from "react";
import Layout from "../components/organisms/layout";
import styled from "styled-components";

export default function Home() {
    const starturl = "/";
    const baseurl = "https://xpl.sp-universe.com/";
    const user = {
        name: "Guest",
        email: "stevenpaw209@gmail.com"
    };
    const [userPos, setUserPos] = useState("");

    const XPL_Logo = styled.img`
        width: auto;
        height: 160px;
    `;
    
    return (
        <Layout starturl={starturl} user={user}>
            <XPL_Logo src="../icons/ExperienceLogger-Logo.svg" alt="Logo of Experience Logger"/>
            <p>Home</p>
        </Layout>
    )
}
