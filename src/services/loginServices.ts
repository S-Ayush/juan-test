import axios from "axios";

const LoginServices = {
  loginUser: (username: string, password: string) =>
    axios.post("https://jsonplaceholder.typicode.com/users", {
      username,
      password,
    }),
};

export default LoginServices;
