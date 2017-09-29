export const setCity = (userId, user) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${userId}`,
    data: { user: user }
  })
);

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: user
  })
);
