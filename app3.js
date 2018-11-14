const http = new EasyHttp();

// Get Users
// http
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

const data = {
  name: "John Doe",
  username: "JohnDoe",
  email: "johndoe@gamil.com"
};

// Post Users
// http
//   .post("https://jsonplaceholder.typicode.com/users", data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// PUT Users
// http
//   .put("https://jsonplaceholder.typicode.com/users/2", data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// DELETE resource
http
  .delete("https://jsonplaceholder.typicode.com/users/2")
  .then(data => console.log(data))
  .catch(err => console.log(err));
