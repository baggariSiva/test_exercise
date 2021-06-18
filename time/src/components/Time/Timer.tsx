import React, {useState} from "react";
import {Time} from "./Style";

const Timer: React.FC = () => {
    const [currentTime, setCurrentTime] = useState<string>(new Date().toLocaleTimeString());
    const updateTime = () => {
        setCurrentTime(new Date().toLocaleTimeString());
    };
    setInterval(updateTime, 1000);
    return (
        <>
            <Time>{currentTime}</Time>
        </>
    );
};

export default Timer;
