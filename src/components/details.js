import { useParams } from "react-router-dom";
import "./details.css";

const Details = ({data}) => {
    const {id} = useParams();

    return (
            <div>
                {data
                    .filter(user => user.id == id)
                    .map((user, index) => (
                        <div key={index} className="details">
                            <ul className="main">
                                <li>name: {user.name}</li>
                                <li>username: {user.username}</li>
                                <li>email: {user.email}</li>
                                <li>phone: {user.phone}</li>
                                <li>company: {user.company.name}</li>
                                <li>website: {user.website}</li>
                                <li>address: 
                                    <ul className="sub">
                                        <li>street: {user.address.street}</li>
                                        <li>suite: {user.address.suite}</li>
                                        <li>city: {user.address.city}</li>
                                        <li>zipcode: {user.address.zipcode}</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    ))}
            </div>
    )
};

export default Details;