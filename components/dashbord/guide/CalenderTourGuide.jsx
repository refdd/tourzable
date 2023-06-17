import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import timeGridPlugin from "@fullcalendar/timegrid";

export default function CalenderTourGuide({ tourOrders }) {
  const formattedEvents = tourOrders.map((order) => ({
    title: order.title,
    start: new Date(order.start_date),
    end: new Date(order.end_date),
    resourceId: "b", // Assuming a single resource is used for all events
  }));
  return (
    <div className="calendar-container">
      <FullCalendar
        // plugins={[
        //   resourceTimelinePlugin,
        //   dayGridPlugin,
        //   interactionPlugin,
        //   timeGridPlugin,
        // ]}
        plugins={[
          resourceTimelinePlugin,
          dayGridPlugin,
          interactionPlugin,
          timeGridPlugin,
        ]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "resourceTimelineWeek,dayGridMonth,timeGridWeek",
        }}
        initialView="dayGridMonth"
        nowIndicator={true}
        editable={true}
        selectable={true}
        selectMirror={true}
        resources={[
          { id: "a", title: "Auditorium A" },
          { id: "b", title: "Auditorium B", eventColor: "green" },
          { id: "c", title: "Auditorium C", eventColor: "orange" },
        ]}
        initialEvents={formattedEvents}
      />
    </div>
  );
}
