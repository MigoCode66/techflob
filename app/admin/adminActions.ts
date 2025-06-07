'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function verify() {
  const cookieStore = await cookies();
  const username = cookieStore.get('username');
  const password = cookieStore.get('password'); // fix typo

  if (
    username?.value !== process.env.ADMIN_USERNAME ||
    password?.value !== process.env.ADMIN_PASSWORD
  ) {
    redirect('/');
  }
}
