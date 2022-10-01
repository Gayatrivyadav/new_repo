// import { render } from '@testing-library/react';
import React, { useState } from 'react';
import  "./style.css";
import menu from './menu.js';
import Navbar from "./Navbar";
import MenuCard from "./MenuCard.js";
const uniqueList = [...new Set(
    menu.map((curElem) => {
        return curElem.category;
    })
),
"All",
];
console.log(uniqueList);
const Restaurent = () =>{

    const[menuData, setMenuData] = useState(menu);
    const[menuList, setMenuList] = useState(uniqueList);
    const filterItem = (category) => {
        if(category === "All"){
            setMenuData(menu);
            return;
        }  
        const updateList = menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updateList);
    };
    return(
        <>
      
        {/* <div className='card-container'>
            <div className='card'>
                <div className='card-body'>
                    <span className='card-number card-circle subtle'> 1 </span><br />
                    <span className='card-author subtle' style={{color:"blue"}}>Breakfast</span>
                    <h2 className='card-title'>Maggi</h2>
                    <img 
                src="https://www.yummyoyummy.com/wp-content/uploads/2021/03/DSC_0516-scaled.jpg" alt='imaged' className='card-media'/><br/>
                    <span className='card-description'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                     dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</span>
                    <div className='card-read'>Read</div>
                </div>
                
                <span className='card-tag subtle'>Order Now</span>

            </div>
    </div> */}
        <Navbar filterItem={filterItem} menuList={menuList}/>
        <MenuCard menuData={menuData}/>
        </>
    );
};
export default Restaurent;