import "../styles/menubar.css"
import {useState} from 'react'

function MenuBar(){
    const [active,setActive]=useState([true,false,false,false])

    function test(ind){
        let arr=[false,false,false,false]
        arr[ind]=true
        setActive(arr)
    }

    return(
        <div>
        <div className="menubar">
            <a className={active[0]?"active":""} onClick={()=>{test(0)}} href="#home">Home</a>
            <a className={active[1]?"active":""} onClick={()=>{test(1)}} href="#about">About</a>
            <a className={active[2]?"active":""} onClick={()=>{test(2)}} href="#journey">Journey</a>
            <a className={active[3]?"active":""} onClick={()=>{test(3)}} href="#contact">Contact</a>
        </div>
        
    </div>
    )
}

export default MenuBar
