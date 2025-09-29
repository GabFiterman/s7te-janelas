// src/components/fixed-menu/date-time-widget/date-time-widget.tsx
import { useState, useEffect } from 'react';
import './datetime-widget.scss';

function DatetimeWidget() {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const formatDate = (date: Date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const formatTime = (date: Date) => {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    return (
        <div className="datetime-widget">
            <span className="time">{formatTime(currentDateTime)}</span>
            <span className="date">{formatDate(currentDateTime)}</span>
        </div>
    );
}

export default DatetimeWidget;
