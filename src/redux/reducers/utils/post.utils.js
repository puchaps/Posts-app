export const convertGetedPosts = (currentPosts, choosedQuantityPosts = 1) => {
  if (!choosedQuantityPosts) {
    return currentPosts.filter( item => item.id <= 1);
  }
  return currentPosts.filter( item => item.id <= choosedQuantityPosts);
};