export const createJoin = join => (
  $.ajax({
    method: 'POST',
    url: 'api/joins',
    data: { join }
  })
);

export const deleteJoin = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/joins/${id}`
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
