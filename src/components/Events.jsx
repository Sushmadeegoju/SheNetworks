// EventPage.jsx
import { useState } from 'react';
import '../css/Events.css';

const sampleFilters = {
  department: ['Computer Science', 'Electrical Engineering', 'Mechanical Engineering'],
  date: ['Today', 'This Week', 'This Month'],
};

const sampleEvents = [
  {
    title: 'Tech Talk: React Fundamentals',
    host: 'Tech Society',
    department: 'Computer Science',
    location: 'Virtual Event',
    dateTime: '2024-02-15T14:30:00',
  },
  {
    title: 'Networking Mixer: Women in Tech',
    host: 'Diversity Network',
    department: 'Electrical Engineering',
    location: 'City Hall Auditorium',
    dateTime: '2024-02-20T18:00:00',
  },
  {
    title: 'Machine Learning Workshop',
    host: 'AI Enthusiasts Club',
    department: 'Mechanical Engineering',
    location: 'Room 102, Engineering Building',
    dateTime: '2024-03-10T15:45:00',
  },
  {
    title: 'UX Design Conference',
    host: 'Design Innovators',
    department: 'Computer Science',
    location: 'Convention Center',
    dateTime: '2024-03-22T09:30:00',
  },
  {
    title: 'Startup Pitch Competition',
    host: 'Entrepreneurship Hub',
    department: 'Electrical Engineering',
    location: 'Innovation Hub, Floor 5',
    dateTime: '2024-04-05T14:00:00',
  },
  // Add more sample events as needed
];

const EventPage = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    department: null,
    date: null,
  });

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const filteredEvents = sampleEvents.filter((event) => {
    const isDepartmentMatch =
      !selectedFilters.department || selectedFilters.department === event.department;
    const isDateMatch = !selectedFilters.date || selectedFilters.date === event.date;
    return isDepartmentMatch && isDateMatch;
  });

  return (
    <div className="event-page-container">
      <div className="filters-container">
        <div className="filter-section">
          <label>Department:</label>
          <select
            value={selectedFilters.department || ''}
            onChange={(e) => handleFilterChange('department', e.target.value)}
          >
            <option value="">All Departments</option>
            {sampleFilters.department.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-section">
          <label>Date:</label>
          <select
            value={selectedFilters.date || ''}
            onChange={(e) => handleFilterChange('date', e.target.value)}
          >
            <option value="">All Dates</option>
            {sampleFilters.date.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="events-container">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div key={event.title} className="event-card">
              <h3>{event.title}</h3>
              <p>
                Hosted by {event.host} | Department: {event.department} | Location: {event.location} | Date & Time:{' '}
                {new Date(event.dateTime).toLocaleString()}
              </p>
            </div>
          ))
        ) : (
          <p>No events match the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default EventPage;
