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
  //console.log(data);
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

// creates a new post
export const createPost = async ({ post }, token) => {
  const response = await fetch(`${URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ post }),
  });
  const data = await response.json();
  //console.log(data);
  return data;
};
// Fetch already logged in user's relevant data
export const fetchUser = async (token) => {
  const response = await fetch(`${URL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  console.log(data);
  return data;
};
// adds new message to a specific post
export const addMessage = async (postId, { message }, token) => {
  const response = await fetch(`${URL}/posts/${postId}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ message }),
  });
  const data = await response.json();
  //console.log(data);
  return data;
};

// this will update a post
export const editPost = async ({ updateObj }, token, postId) => {
  const response = await fetch(`${URL}/posts/${postId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ updateObj }),
  });
  const data = await response.json();
  //console.log(data);
  return data;
};

export const deletePost = async (token, postId) => {
  const response = await fetch(`${URL}/posts/${postId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  //console.log(data);
  return data;
};
