export const setUser = user => {
  if (localStorage.getItem('advito-blops-user')) {
    localStorage.removeItem('advito-blops-user');
  }
  localStorage.setItem('advito-blops-user', JSON.stringify(user));
};

export const validateUser = () => {
  if (localStorage.getItem('advito-blops-user')) {
    const user = JSON.parse(localStorage.getItem('advito-blops-user'));
    return { authenticated: true, user };
  } else {
    return { authenticated: false, user: {} };
  }
};

export const removeUser = () => {
  localStorage.clear();
};

export const getToken = () => {
  if (localStorage.getItem('advito-blops-user')) {
    const user = JSON.parse(localStorage.getItem('advito-blops-user'));
    return user.sessionToken;
  } else return '';
};
