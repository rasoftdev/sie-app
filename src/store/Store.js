import create from 'zustand';

const AppStore = create(set => ({
  token: null,
  user: null,
  setToken: (token) => set(state => ({ ...state, token })),
  setUser: (user) => set(state => ({ ...state, user })),
}));

export default AppStore;