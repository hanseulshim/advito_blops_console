export const setUser = user => {
  if (localStorage.getItem('user')) {
    localStorage.removeItem('user');
  }
  localStorage.setItem('user', JSON.stringify(user));
};

export const validateUser = () => {
  if (localStorage.getItem('user')) {
    const user = JSON.parse(localStorage.getItem('user'));
    return { authenticated: true, user };
  } else {
    return { authenticated: false, user: {} };
  }
};

export const removeUser = () => {
  localStorage.clear();
  window.location.reload();
};
