import dummy from "../db/data.json";
import { Link } from "react-router-dom";

export default function DayList() {
    console.log(dummy)
    return (
        <ul className="list_day">
            {dummy.days.map(day => (
                <li key={day.id}>
                    {/* React에서는 a href 대신 Link to를 사용한다. */}
                    <Link to={`/day/${day.day}`}> Day {day.day}</Link>
                </li>
            )
            )
            }
        </ul>
    );
}
