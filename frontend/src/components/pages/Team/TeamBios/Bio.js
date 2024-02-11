import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { team } from './Data';
import '../TeamBios/Bio.css';
import { FaChevronLeft } from 'react-icons/fa';

const Bio = () => {
    const { memberName } = useParams();
    const member = team.find(m => m.name === memberName);

    if (!member) {
        return <div>Member not found</div>;
    }

    const imagePath = process.env.PUBLIC_URL + '/' + member.img;

    return (
        <>
            <Link to="/aboutus" className="back">
                <FaChevronLeft className="icon" /> Back to Team
            </Link>
            <div className="bio-container">
                <img src={imagePath} alt={member.alt} className="headshot-img" />
                <h1 className="member-name-h1">{member.name}</h1>
                <p className="member-title">{member.title}</p>
                <p className="bio">{member.bio}</p>
                <p className="member-phone">{member.phone}</p>
                <p className="member-email">{member.email}</p>
            </div>
        </>
    )
}

export default Bio
