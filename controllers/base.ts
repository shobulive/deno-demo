export /**
 * Health check
 *
 * @param {{ response: any }} { response }
 */
const healthCheck = ({ response }: { response: any }) => {
  response.body = "Health check passed";
};

export /**
 * Ping route
 *
 * @param {{ response: any }} { response }
 */
const ping = ({ response }: { response: any }) => {
  response.body = "pong";
};