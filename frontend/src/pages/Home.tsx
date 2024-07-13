import React, { useState } from 'react';
import JobList from '../components/Main/JobList/JobList';
import { Button, Typography } from 'antd';
import './home.css';

const Home = () => {
    const [started, setStarted] = useState(false);
    const startTheApp = () => {
        setStarted(true);
    };
    return (
        <>
            {started ? (
                <JobList />
            ) : (
                <div>
                    <Typography.Title
                        level={4}
                        style={{ textAlign: 'center', marginBottom: '20px' }}
                    >
                        <div
                            className="doorWrap"
                            onClick={startTheApp}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="leftDoor">AFRINTERVIEW</div>
                            <div className="rightDoor">ASSISTANT</div>
                            <div className="content">
                                <h1>
                                    Welcome to the interview simulation platform
                                    with with the help of AI 🤖📑
                                </h1>
                            </div>
                        </div>
                    </Typography.Title>
                </div>
            )}
        </>
    );
};

export default Home;