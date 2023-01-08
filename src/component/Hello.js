import World from "./World";
import styles from "./Hello.module.css";
import { useState } from "react";

export default function Hello() {
    // let name = "moon";  // 단순히 변수일 뿐 state가 아니다.
    const [name, setName] = useState('moon'); // 배열 구조 분해 할당. setName을 호출해서 name을 제어한다.

    function changeName(){
        // const newName = name === "moon" ? "Hong ki" : "moon";
        console.log(name);
        // document.getElementById("name").innerText = name;
        setName(name === 'moon' ? 'Hong ki' : 'moon');
    }
   
    return (
        <div>
            <h1>state</h1>
            <h2 id="name">{name}</h2>
            <button onClick={changeName}>change</button>
        </div>
    );

}