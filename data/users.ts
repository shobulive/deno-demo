// @ts-ignore
import { User } from "../models/entity.ts";
let users: User[] = [
  {
    id: "1",
    name: "User 1",
    description: "This is user 1",
  },
  {
    id: "2",
    name: "User Two",
    description: "This is user two",
  },
  {
    id: "3",
    name: "User Three",
    description: "This is user three",
  },
];

export /**
 * Setter for dummy data
 *
 * @param {User[]} newUsers
 */
const setUsers = (newUsers: User[]) => {
  users = newUsers;
};

export /**
 * Getter for dummy data
 *
 */
const getUsers = () => users;
