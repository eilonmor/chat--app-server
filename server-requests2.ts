import { Message } from '../types/message';
const endpoint = 'http://localhost:8000';

export async function getMessages() {

  return await fetch(endpoint + '/users')
      .then((res) => res.json());
}
export async function getUsers() {

  return await fetch(`${endpoint}/mockUsers`)
    .then((res) => res.json());
}

/**
 * GET request to get the full details of a user
 **/
export async function getUserDetails(userId: number) {
  // todo: replace this with fetch to get the user details from the server.
  //  For mocking example, we're calling an external JSON service.
  //  You can use mockUserDetails.ts for the list of user details in the server.
  const res = await fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`);
  return (await res.json())[0];
}

/**
 * POST request to add a message. The message contains: id, body, timestamp, authorId
 **/
export async function addNewMessage(message: Message) {
  // todo: implement sending a new message to the server
}

/**
 * POST request to change the user's like of a message
 **/
export async function changeMessageLikes(messageId: number, userId: number, like: boolean) {
  // todo: implement sending a rquest to change the like of a message by the user
}