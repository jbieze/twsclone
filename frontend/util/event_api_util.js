
export const fetchEvents = cityId => (
  $.ajax({
    method: 'GET',
    url: `api/cities/${cityId}/events`
  })
);
export const fetchUserEvents = userId => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/events`
  })
);

export const createEvent = event => (
  $.ajax({
    method: 'POST',
    url: `api/cities/${event.city_id}/events`,
    data: {event: event}
  })
);

export const updateEvent = (event) => (
  $.ajax({
    method: 'PATCH',
    url: `api/events/${event.id}`,
    data: {event: event}
  })
);

export const fetchEvent = id => (
  $.ajax({
    method: 'GET',
    url: `api/events/${id}`
  })
);

export const destroyEvent = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/events/${id}`
  })
);
