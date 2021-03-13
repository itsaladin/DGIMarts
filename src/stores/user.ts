import {types} from 'mobx-state-tree';

export const User = types.model('User', {
  id: types.number,
  token: types.maybeNull(types.string),
  nicename: types.string,
  firstName: types.maybeNull(types.string),
  lastName: types.maybeNull(types.string),
  email: types.maybeNull(types.string),
  phone: types.maybeNull(types.string),
  displayName: types.maybeNull(types.string),
});
