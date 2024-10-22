import React from 'react';
import './style.scss';

const Main = () => {
    return (
        <div className="vet-dash">
            <div className="vet-dash__container">
                <div className="vet-dash__row">
                    {/* Profile Card */}
                    <div className="vet-dash__card">
                        <div className="vet-dash__header">
                            <span className="vet-dash__icon">👤</span>
                            <h2>본사지시RT</h2>
                        </div>
                        <div className="vet-dash__profile">
                            <div className="vet-dash__stats">
                                <span className="vet-dash__percentage">76%</span>
                                <span className="vet-dash__label">Complete</span>
                            </div>
                            <div className="vet-dash__info">
                                <div className="vet-dash__image"></div>
                                <h3>Joe Fallin</h3>
                            </div>
                            <button className="vet-dash__btn">UPDATE PROFILE</button>
                        </div>
                    </div>

                    {/* Clinic Card */}
                    <div className="vet-dash__card">
                        <div className="vet-dash__header">
                            <span className="vet-dash__icon">🏥</span>
                            <h2>반출RT</h2>
                            <span className="vet-dash__tag">Pet Care</span>
                        </div>
                        <div className="vet-dash__clinic">
                            <div className="vet-dash__prices">
                                <div className="vet-dash__price-item">
                                    <span>Consultation</span>
                                    <span className="vet-dash__amount">$30</span>
                                </div>
                                <div className="vet-dash__price-item">
                                    <span>Followup</span>
                                    <span className="vet-dash__amount">$15</span>
                                </div>
                            </div>
                            <div className="vet-dash__schedule">
                                <div className="vet-dash__time">
                                    <span>Mon-Fri</span>
                                    <span>08AM - 09PM</span>
                                </div>
                                <div className="vet-dash__time">
                                    <span>Sat-Sun</span>
                                    <span>12AM - 05PM</span>
                                </div>
                            </div>
                            <button className="vet-dash__btn">MANAGE CLINIC</button>
                        </div>
                    </div>

                    {/* Team Card */}
                    <div className="vet-dash__card">
                        <div className="vet-dash__header">
                            <span className="vet-dash__icon">👥</span>
                            <h2>반입RT</h2>
                            <button className="vet-dash__btn-add">+</button>
                        </div>
                        <div className="vet-dash__team">
                            <div className="vet-dash__stats">
                                <span className="vet-dash__number">5</span>
                                <span className="vet-dash__label">Team Members</span>
                            </div>
                            <div className="vet-dash__avatars">
                                {/* Team member avatars */}
                            </div>
                            <button className="vet-dash__btn">MANAGE TEAM</button>
                        </div>
                    </div>

                    {/* Consultation Card */}
                    <div className="vet-dash__card">
                        <div className="vet-dash__header">
                            <span className="vet-dash__icon">📋</span>
                            <h2>게시판</h2>
                            <button className="vet-dash__btn-add">+</button>
                        </div>
                        <div className="vet-dash__consult">
                            <div className="vet-dash__stats-row">
                                <div className="vet-dash__stat-item">
                                    <span className="vet-dash__number">175</span>
                                    <span className="vet-dash__label">This Month</span>
                                </div>
                                <div className="vet-dash__stat-item">
                                    <span className="vet-dash__number vet-dash__number--active">21</span>
                                    <span className="vet-dash__label">Active</span>
                                </div>
                            </div>
                            <div className="vet-dash__followup">
                                <span className="vet-dash__notification">4</span>
                                <span>Followup Scheduled today</span>
                            </div>
                            <button className="vet-dash__btn">VIEW ALL</button>
                        </div>
                    </div>
                </div>

                <div className="vet-dash__row">
                    {/* Traction Card */}
                    <div className="vet-dash__card vet-dash__card--wide">
                        <div className="vet-dash__header">
                            <span className="vet-dash__icon">📈</span>
                            <h2>매출현황</h2>
                        </div>
                        <div className="vet-dash__traction">
                            <div className="vet-dash__stats-row">
                                <div className="vet-dash__stat-item">
                                    <span className="vet-dash__label">Revenue</span>
                                    <span className="vet-dash__value">$2399</span>
                                </div>
                                <div className="vet-dash__stat-item">
                                    <span className="vet-dash__label">Visit</span>
                                    <span className="vet-dash__value">182</span>
                                </div>
                                <div className="vet-dash__stat-item">
                                    <span className="vet-dash__label">Followup</span>
                                    <span className="vet-dash__value">1652</span>
                                </div>
                            </div>
                            <div className="vet-dash__graph">
                                {/* Graph content */}
                            </div>
                            <button className="vet-dash__btn">VIEW ANALYTICS</button>
                        </div>
                    </div>

                   
                   <div className="vet-dash__card">
                        <div className="vet-dash__header">
                            <span className="vet-dash__icon">📋</span>
                            <h2>공지사항</h2>
                            <button className="vet-dash__btn-add">+</button>
                        </div>
                        <div className="vet-dash__consult">
                            <div className="vet-dash__stats-row">
                                <div className="vet-dash__stat-item">
                                    <span className="vet-dash__number">175</span>
                                    <span className="vet-dash__label">This Month</span>
                                </div>
                                <div className="vet-dash__stat-item">
                                    <span className="vet-dash__number vet-dash__number--active">21</span>
                                    <span className="vet-dash__label">Active</span>
                                </div>
                            </div>
                            <div className="vet-dash__followup">
                                <span className="vet-dash__notification">4</span>
                                <span>Followup Scheduled today</span>
                            </div>
                            <button className="vet-dash__btn">VIEW ALL</button>
                        </div>
                    </div>
                    <div className="vet-dash__card">
                        <div className="vet-dash__header">
                            <span className="vet-dash__icon">📋</span>
                            <h2>쪽지</h2>
                            <button className="vet-dash__btn-add">+</button>
                        </div>
                        <div className="vet-dash__consult">
                            <div className="vet-dash__stats-row">
                                <div className="vet-dash__stat-item">
                                    <span className="vet-dash__number">175</span>
                                    <span className="vet-dash__label">This Month</span>
                                </div>
                                <div className="vet-dash__stat-item">
                                    <span className="vet-dash__number vet-dash__number--active">21</span>
                                    <span className="vet-dash__label">Active</span>
                                </div>
                            </div>
                            <div className="vet-dash__followup">
                                <span className="vet-dash__notification">4</span>
                                <span>Followup Scheduled today</span>
                            </div>
                            <button className="vet-dash__btn">VIEW ALL</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Main;