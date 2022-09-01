import { types } from "mobx-state-tree";

const data = {
  name: "this is a name",
  price: 30,
  image: ""
};

const WishListItem = types
  .model({
    name: types.string,
    price: types.number,
    // image: types.optional(types.string, "")
    image: ""
  })
  .actions((self) => ({
    changeName(newName) {
      self.name = newName;
    },
    changePrice(newPrice) {
      self.price = newPrice;
    },
    changeImage(newImage) {
      self.image = newImage;
    }
  }));

// define the type of the wishlist
export const WishList = types
  .model({
    // wishList is expressed in term of an array of items
    items: types.optional(types.array(WishListItem), [])
  })
  .actions((self) => ({
    add(item) {
      self.item.push(item);
    }
  }))
  // this is a computed property
  .views((self) => ({
    get toatlPrice() {
      return self.items.reduce((sum, entry) => sum + entry.price, 0);
    }
  }));
