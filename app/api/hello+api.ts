// typecsirpt => https://docs.expo.dev/guides/typescript/

//==> 1 An API route is created in the app directory. For example, add the following route handler.
// It is executed when the route /hello is matched.
// app/hello+api.ts
export function GET(request: Request) {
  return Response.json({ hello: 'world' })
}

/**
 * You can export any of the following functions GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS from a server route.
 * The function executes when the corresponding HTTP method is matched. Unsupported methods will automatically return 405:
 *  Method not allowe
 */
//=> 2 Start the development server with Expo CLI:

// npx expo
//===> 3 You can make a network request to the route to access the data.
// Run the following command to test the route
// curl http://localhost:8081/hello
// You can also make a request from the client code:
/***
 * ===> api/index.tsx
 * import { Button } from 'react-native';

async function fetchHello() {
  const response = await fetch('/hello');
  const data = await response.json();
  alert('Hello ' + data.hello);
}

export default function App() {
  return <Button onPress={() => fetchHello()} title="Fetch hello" />;
}
 */
// 4==> app.json
// {
//   "plugins": [
//     [
//       "expo-router",
//       {
//         "origin": "https://evanbacon.dev/"
//       }
//     ]
//   ]
// }

// Requests:
//Requests use the global , standard Request object
/**
 * Requests use the global, standard Request object.
 * export async function GET(request: Request, { post }: Record<string, string>) {
  // const postId = request.expoUrl.searchParams.get('post')
  // fetch data for 'post'
  return Response.json({ ... });
}
 */

/**
 * https://fetch.spec.whatwg.org/#response
 * Request body
 * Use the request.json() function to access the request body. It automatically parses the body and returns the result.
 * app/validate+api.ts
 * export async function POST(request: Request) {
    const body = await request.json();
    return Response.json({ ... });
  }

 */
/**
 * Response
 * app/demo+api.ts
Responses use the global, standard Response object.
export function GET() {
  return Response.json({ hello: 'universe' });
}

 */

/**
 * Errors
You can respond to server errors by using the Response object.
app/blog/[post].ts
import { Request, Response } from 'expo-router/server';

export async function GET(request: Request, { post }: Record<string, string>) {
  if (!post) {
    return new Response('No post found', {
      status: 404,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
  // fetch data for `post`
  return Response.json({ ... });
}
Making requests with an undefined method will automatically return 405: Method not allowed. 
If an error is thrown during the request, it will automatically return 500: Internal server error.
 */
