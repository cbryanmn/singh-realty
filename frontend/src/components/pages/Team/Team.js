import React from 'react';
import { Link } from 'react-router-dom';
import { team } from './TeamBios/Data';
import './Team.css';

function TeamTable() {
    return (
        <>
            <div className="meet">
                <h1 className="team-h1">Meet Our Team</h1>
            </div>
            <div className="team-grid">
                {team.map(member => (
                    <div key={member.name} className="team-member">
                        <Link to={`/bio/${encodeURIComponent(member.name)}`}>
                            <img src={member.img} alt={`${member.name}'s headshot`} className="team-image" />
                        </Link>
                        <div className="team-info">
                            <div className="team-name">
                                <Link to={`/bio/${encodeURIComponent(member.name)}`} className="name-link">{member.name}</Link></div>
                            <div className="team-title">
                                <Link to={`/bio/${encodeURIComponent(member.name)}`} className="title-link">{member.title}</Link></div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TeamTable