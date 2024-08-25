import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './MyCalender.css';

class MyCalendar extends Component {
    render() {
        return (
          <div className="App">
            <FullCalendar 
              defaultView="dayGridMonth" 
              plugins={[ dayGridPlugin ]}
              events={[
                { title: 'event 1', date: '2024-08-24' },
                { title: '말바우 장날', date: '2024-08-26' }
            ]}
            />
            {/* https://dhdl-it.tistory.com/68 */}
          </div>
        );
    }
}
export default MyCalendar;