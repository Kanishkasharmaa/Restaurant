import React,{useState} from 'react';
import "./style.css";
import Menu from "./menuapi";
import menuCard from './menuCard';
const Restaurant = () => {
    const [menuData, setmenuData] = useState(Menu)
    return (
        <>
        <menuCard menuData ={menuData} />
        
        </>
    )
}

export default Restaurant
