import dummy from "../db/data.json";
import World from "./World";
import { useParams } from "react-router-dom";
// React에서 세부 url을 얻기 위해서는 useParams를 import하여 사용한다.

export default function Day() {
    // const day = 3;

    // 아래 두 day는 동일한 값을 가진다. 
    const day = useParams().day;
    // const { day } = useParams();
    const wordList = dummy.words.filter(word => (
        word.day === Number(day))
    )

    return (

        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {wordList.map(word => (
                        <tr key={word.id}>
                            <td>{word.eng}</td>
                            <td>{word.kor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>

    );
}
