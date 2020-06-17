import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { User } from "../models/entity.ts";
import { getUsers, setUsers } from "../data/users.ts";

export /**
 * Get all Users in the system
 *
 * @param {{ response: any }} { response }
 */
const getAllUsers = ({ response }: { response: any }) => {
  response.body = {
    statusCode: 0,
    statusMessage: "Yayyy! Success",
    data: getUsers(),
  };
};

export /**
 * Gets user by ID
 *
 * @param {{
 *   params: { id: string };
 *   response: any;
 * }} {
 *   params,
 *   response,
 * }
 */
const getUserById = ({
  params,
  response,
}: {
  params: { id: string };
  response: any;
}) => {
  const user: User | undefined = getUsers().find((p) => p.id === params.id);
  const isSuccess = !!user;
  response.body = {
    statusCode: isSuccess ? 0 : 1,
    statusMessage: isSuccess ? "Yayyy! Success" : "User not found",
    data: user,
  };
};

export /**
 * This function adds a user
 *
 * @param {{
 *   request: any;
 *   response: any;
 * }} {
 *   request,
 *   response,
 * }
 */
const addUser = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const body = await request.body();
  if (!request.hasBody) {
    response.status = 400;
    response.body = {
      statusCode: 1,
      statusMessage: "Failure! No data provided",
    };
  } else {
    const user: User = body.value;
    user.id = v4.generate();
    setUsers([...getUsers(), user]);
    response.status = 201;
    response.body = {
      statusCode: 0,
      statusMessage: "Yayyy! Success",
      data: user,
    };
  }
};

export /**
 * This function updates a user
 *
 * @param {{
 *   params: { id: string };
 *   request: any;
 *   response: any;
 * }} {
 *   params,
 *   request,
 *   response,
 * }
 * @returns
 */
const updateUser = async ({
  params,
  request,
  response,
}: {
  params: { id: string };
  request: any;
  response: any;
}) => {
  const user: User | undefined = getUsers().find((p) => p.id === params.id);
  if (!user) {
    response.status = 404;
    response.body = {
      statusCode: 1,
      statusMessage: "Failure! User Not Found",
    };
    return;
  }
  const body = await request.body();

  const updateData: { name?: string; description?: string; price?: number } =
    body.value;
  setUsers(
    getUsers().map((p) => (p.id === params.id ? { ...p, ...updateData } : p))
  );
  response.status = 200;
  response.body = {
    statusCode: 0,
    statusMessage: "Yayyy! Success",
    data: getUsers(),
  };
};

export /**
 * This function deletes the user
 *
 * @param {{
 *   params: { id: string };
 *   response: any;
 * }} {
 *   params,
 *   response,
 * }
 * @returns
 */
const deleteUser = ({
  params,
  response,
}: {
  params: { id: string };
  response: any;
}) => {
  if (!getUsers().find((u) => u.id == params.id)) {
    response.status = 404;
    response.body = {
      statusCode: 1,
      statusMessage: "Failure! User Not Found",
    };
    return;
  }
  setUsers(getUsers().filter((p) => p.id !== params.id));
  response.body = {
    statusCode: 0,
    statusMessage: "Yayyy! Success",
  };
};
