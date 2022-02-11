import "./card.css";
import Button from "./button";
import { Link } from 'react-router-dom'

const Card = ({data}) => {
    return (
            
            <div className="cardDiv">
                <ul>
                    <li id="pfp">
                        {data.name.charAt(0)}
                    </li>
                    <li id="name">
                        <h3>{data.name}</h3>
                    </li>
                    <li id="username">
                        @{data.username}
                    </li>
                    <li id="email">
                        <a href={`mailto:${data.email}`}>
                        {data.email}
                        </a>
                    </li>
                </ul>
                <Link to={`/details/${data.id}`}>{<Button />}</Link>
            </div>
    )
};

export default Card;