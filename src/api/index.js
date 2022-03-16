/**
 * This file features and exports all of your calls to the API
 */
export const BASE_URL = "https://strangers-things.herokuapp.com";
export const COHORT = "2202-FTB-ET-WEB-FT";
const URL = BASE_URL + "/api/" + COHORT;
//console.log(URL);

// fetch all posts

export const fetchGetPosts = async () => {
  try {
    const response = await fetch(`${URL}/posts`);
    const result = await response.json();
    if (result.error) throw result.error;
    return result.data.posts;
  } catch (err) {
    console.error("Uh oh, trouble fetching posts!", err);
  }
};

// it should send the user info to the API and return a Token.
export const registerUser = async (username, password) => {
  const response = await fetch(`${URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  });
  const data = await response.json();
  console.log(data);
  return data;
};
// loginUser
export const loginUser = async (username, password) => {
  const response = await fetch(`${URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  });
  const data = await response.json();
  console.log(data);
  return data;
};

// singlePost
export const createPost = async (postObject, token) => {
  const response = await fetch(`${URL}/users/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: postObject,
    }),
  });
  const data = await response.json();
  console.log(data);
  return data;
};
