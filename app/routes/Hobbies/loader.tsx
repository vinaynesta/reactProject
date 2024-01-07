import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import Hobbies from './index';

export let loader: LoaderFunction = async ({ request }) => {
  // You can load data here if needed
  return json(
    { title: 'New Remix App', description: 'Welcome to Remix!' },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};

export default Hobbies;
