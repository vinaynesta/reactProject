// src/routes/index/loader.ts

import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import Love from './index';

export let loader: LoaderFunction = async ({ request }) => {
  return json(
    { title: 'New Remix App', description: 'Welcome to Remix!' },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};

export default Love;
