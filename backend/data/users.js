import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Berlin",
    email: "berlin@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Tokyo",
    email: "tokyo@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
