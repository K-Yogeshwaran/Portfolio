import React from 'react'

import "./AchievementsPage.css";
import { achievements } from './MyDetails';

function AchievementsPage() {
    return (
        <div className='achievementsPage'>
            <h1 className='headerText'>Achievements</h1>

            <p className='describingText'>Notable accomplishments and milestones throughout my development journey.</p>


            <div className="achievementsGrid">
                {achievements.map((achievement, index) => {
                    const Icon = achievement.icon;
                    return (
                        <div key={index} className='achievementCard'>
                            <img src={achievement.image} alt=""/>
                            <div className="achievementContent">
                                <div className="titleAndIcon">
                                    <div className="icon" style={{color : achievement.iconColor , backgroundColor : achievement.iconBgColor}}><Icon/></div>
                                    <div className="title">{achievement.title}</div>
                                </div>
                                <div className="categoryAndPeriod d-flex gap-3 justify-content-center align-items-center">
                                    <div className="category">{achievement.category}</div>
                                    <div className="period">{achievement.period}</div>
                                </div>
                                <div className="description">{achievement.description}</div>
                                
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    )
}

export default AchievementsPage