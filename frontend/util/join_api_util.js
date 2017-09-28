export const fetchJoins = () => {
  return $.ajax({
    method: 'GET',
    url: `api/joins/`
  });
};
