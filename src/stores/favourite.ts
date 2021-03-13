import {SnapshotOrInstance, types, Instance} from 'mobx-state-tree';

export const FavouriteListModel = types.model('CartItem', {
  id: types.identifier,
  name: types.string,
  image: types.string,
  price: types.number,
});

export type FavouriteListModelType = SnapshotOrInstance<
  typeof FavouriteListModel
>;
export type FavouriteListItemType = Instance<typeof FavouriteListModel>;
