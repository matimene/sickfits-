/* eslint-disable */
import { KeystoneContext } from '@keystone-next/types';
import { CartItemCreateInput } from '../.keystone/schema-types';
import { Session } from '../types';

export default async function addToCart(
  root: any,
  { productId }: { productId: string },
  context: KeystoneContext
): Promise<CartItemCreateInput> {
  // query current user to see if they are logged in
  const sesh = context.session as Session;
  if (!sesh.itemId) {
    throw new Error('You must be logged in to do this!');
  }
  // query the current user cart
  const allCartItems = await context.lists.CartItem.findMany({
    where: { user: { id: sesh.itemId }, product: { id: productId } },
    resolveFields: 'id,quantity'
  });
  // see if curr item is in their cart, if it is => increment by 1
  const [existingCartItem] = allCartItems;
  
  if (existingCartItem) {
      console.log(`There are already ${existingCartItem.quantity}, incremented by 1!`);
    return await context.lists.CartItem.updateOne({
      id: existingCartItem.id,
      data: {
        quantity: existingCartItem.quantity + 1,
      },
      resolveFields: false,
    });
  }
  //if it isnt, create a new cart item
  return await context.lists.CartItem.createOne({
     data: {
        product: {connect: {id: productId}},
        user: {connect:{id:sesh.itemId}}
     },
     resolveFields: false,
  })
}
