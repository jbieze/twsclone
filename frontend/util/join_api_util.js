export const createJoin = join => {
  return (
    $.ajax({
      method: 'POST',
      url: 'api/joins',
      data: { join }
    })
  );
};

export const deleteJoin = eventId => (
  $.ajax({
    method: 'DELETE',
    url: `api/joins/${eventId}`
  })
);

export const fetchJoins = () => (
  $.ajax({
    method: 'GET',
    url: `api/joins/`
  })
);

export const fetchJoin = id => (
  $.ajax({
    method: 'GET',
    url: `api/joins/${id}`
  })
);
