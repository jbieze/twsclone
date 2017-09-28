export const createJoin = join => {
  return (
  $.ajax({
    method: 'POST',
    url: 'api/joins',
    data: { join }
  })
);
};

export const deleteJoin = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/joins/${id}`
  })
);

export const fetchJoins = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/joins'
  });
};

export const fetchJoin = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/joins/${id}`
  });
};
