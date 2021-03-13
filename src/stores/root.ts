import {Instance, types} from 'mobx-state-tree';
import {DataJson} from '../types/auth/auth';
import {FavouriteListModel, FavouriteListModelType} from './favourite';
import {User} from './user';

export const RootStore = types
  .model('RootStore', {
    state: types.maybe(types.string),
    user: types.maybe(User),
    favouriteList: types.map(FavouriteListModel),
    shipping: 60,
    payment: 'cod',
    check: false,
  })
  .actions((self) => ({
    logIn(user: DataJson) {
      self.user = user;
    },
    setState(s: string) {
      self.state = s;
    },
    setCheck() {
      self.check = !self.check;
    },
    isFavListed(id: string) {
      return self.favouriteList.has(id);
    },
    logout() {
      self.user = undefined;
    },
    addToFavouriteList(item: FavouriteListModelType) {
      if (self.favouriteList.has(item.id)) {
        return 'Property is already in the wishlist';
      }
      self.favouriteList.put(item);
      return 'Property Added successfull in the wishlist';
    },
    removeFFavouriteList(id: string) {
      self.favouriteList.delete(id);
    },
  }))
  .views((self) => ({
    get isLoggedIn() {
      return !!self.user;
    },
  }));

export type RootStoreType = Instance<typeof RootStore>;
