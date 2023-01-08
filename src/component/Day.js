import dummy from "../db/data.json";
import World from "./World";

export default function Day() {
    const day = 1;
    const wordList = dummy.words.filter(word => (
        word.day === day)
    )

    console.log(wordList);

    return (

        <div>

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

        </div>

    );
}
