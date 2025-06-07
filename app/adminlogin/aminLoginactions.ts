'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(username: string, password: string) {
  if (
    process.env.ADMIN_USERNAME === username &&
    process.env.ADMIN_PASSWORD === password
  ) {
    const cookieStore = await cookies();
    cookieStore.set('username', username, { httpOnly: true });
    cookieStore.set('password', password, { httpOnly: true });
    redirect(`/admin`);
  }
  console.error('valid user information');
}
