const transformPosts = (currentPosts, chosenQuantityPosts = 1) => {
  if (!chosenQuantityPosts) {
    return currentPosts.filter((item) => item.id <= 1);
  }
  return currentPosts.filter((item) => item.id <= chosenQuantityPosts);
};

export default transformPosts;
