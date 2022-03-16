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
