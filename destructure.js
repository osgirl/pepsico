let apiResponse = {
  username: "baluragala",
  url: "https://github.com/baluragala",
  type: "paid"
};

// let username = apiResponse.username;
// let url = apiResponse.url;
// let type = apiResponse.type;

let { url, username: customerName = "N/A", type = "free" } = apiResponse;

let [a, b, , ...rest] = [1, 2, 3, 4, 5];
