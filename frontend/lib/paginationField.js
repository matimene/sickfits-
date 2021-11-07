import { PAGINATION_QUERY } from '../components/Pagination';

export default function paginationField() {
   return {
      keyArgs: false, // Tells apollo we will take care of everything
      read(existing = [], { args, cache }) {
         // First thing it does is ask the read fn for those items

         const { skip, first } = args;
         // Read the number of items on the page from the cache
         const data = cache.readQuery({ query: PAGINATION_QUERY });
         const count = data?._allProductsMeta?.count;
         const page = skip / first + 1;
         const pages = Math.ceil(count / first);
         // Check if we have existing items
         const items = existing.slice(skip, skip + first).filter((x) => x);
         if (items.length && items.length !== first && page === pages) {
            // If there are items AND there arent enough items to satisfy how many were requested AND
            // we're on the last page THEN just send it
            return items;
         }
         if (items.length !== first) {
            // We dont have any items, we must fetch them
            return false;
         }
         // If there are items, just return them from the cache
         if (items.length) {
            return items;
         }
         return false; // fallback to network
      },
      merge(existing, incoming, { args }) {
         const { skip, first } = args;
         // This runs when apollo client comes back from the network with our products

         const merged = existing ? existing.slice(0) : [];
         for (let i = skip; i < skip + incoming.length; i++) {
            merged[i] = incoming[i - skip];
         }
         // Finally we return items the merged items from the cache
         return merged;
      },
   };
}
