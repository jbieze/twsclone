export const fetchJoin = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/joins/${id}`
  });
};

export const createJoin = join => (
  $.ajax({
    url: 'api/joins',
    method: 'POST',
    data: { join }
  })
);

export const deleteJoin = id => (
  $.ajax({
    url: `api/joins/${id}`,
    method: 'DELETE'
  })
);
