import World from "./World";
import styles from "./Hello.module.css";

export default function Hello() {
    
    function showName(){
        console.log("Moon");
    }

    function showAge(age) {
        console.log(age);
    }

    function showAge2(){
        console.log(14);
    }

    function showText(e){
        console.log(e.target.value)
    }

    function showText2(text){
        console.log(text);
    }

    return (
        <div>

            <h1>Hello</h1>
            <button onClick={showName}>Show Name</button>

            <button onClick={()=>{showAge(14)}}>Show age with Param</button>
            <button onClick={showAge2}>Show age with Param2</button>
            
            <button onClick={
                ()=>{
                    console.log(34);
                }
            }>Show Age
            </button>

            <input type="text" onChange={showText} />
            <input type="text" onChange={(e) => {
                const text = e.target.value;
                showText2(text);
            }} />

        </div>
    );

}