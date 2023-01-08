import World from "./World";
import styles from "./Hello.module.css";
import { useState } from "react";
import UserName from "./UserName";

export default function Hello(props) {
    console.log(props);

    // let name = "moon";  // 단순히 변수일 뿐 state가 아니다.
    const [name, setName] = useState('moon'); // 배열 구조 분해 할당. setName을 호출해서 name을 제어한다.
    
    // props로 받아온 값을 변경하기 위해서는 state를 생성해야 한다.
    const [age, setAge] = useState(props.age);

    const message = age > 19 ? "성인입니다" : "미성년자입니다";

    function changeName(){
        // const newName = name === "moon" ? "Hong ki" : "moon";
        console.log(name);
        // document.getElementById("name").innerText = name;
        setName(name === 'moon' ? 'Hong ki' : 'moon');
        setAge(age+1);
    }
   
    return (
        <div>
            <h1>state</h1>
            {/* 넘겨 받은 값은 props.age이다. 하지만 이 컴포넌트에서 props.age를 받아서 age라는 새로운 state를 생성했다. */}
            <h2 id="name">{name}({age}세) : {message}</h2>
            <UserName name={name} />
            <button onClick={changeName}>change</button>
        </div>
    );

}