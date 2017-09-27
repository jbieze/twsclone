export const setCity = (userId, user) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${userId}`,
    data: { user: user }
  })
);
