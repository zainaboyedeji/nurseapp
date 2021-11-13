import React,{useRef} from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';

import "./calender.scss";

export default function Calender() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const inputEl = useRef(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const handleDateClick = (event) => {
    inputEl.current.style.position = "absolute";
inputEl.current.style.top = `${event.jsEvent.y}px`;
inputEl.current.style.left = `${event.jsEvent.x}px`;
    setAnchorEl(inputEl.current)
   console.log(event);
  };
 
  return (
    <div class="calenderView">
    <button ref={inputEl} aria-describedby={id} type="button" onClick={handleClick}>
        Toggle Popper
      </button>
      <Popper  open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
          The content of the Popper.
        </Box>
      </Popper>
    
      <FullCalendar
        plugins={[timeGridPlugin,interactionPlugin]}
        initialView="timeGridWeek"
        events={[
          { title: "event 1", date: "2021-11-15" },
          { title: "event 2", date: "2021-11-20" },
        ]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "timeGridWeek,timeGridDay",
        }}
        eventClick={handleDateClick}
      /> 
    </div>
  );
}
