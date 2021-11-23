import React,{useState} from 'react';
import "./style.css";
import Menu from "./menuapi";
import MenuCard from './menuCard';
const Restaurant = () => {
    const [menuData, setmenuData] = useState(Menu)
    return (
        <>
        <MenuCard menuData ={menuData} />
        <p>Kanishka</p>
        
        </>
    )
}

export default Restaurant
