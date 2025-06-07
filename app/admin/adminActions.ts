'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { promises as fs } from 'fs';
export async function verify() {
  const cookieStore = await cookies();
  const username = cookieStore.get('username');
  const password = cookieStore.get('password'); // fix typo

  if (
    username?.value !== process.env.ADMIN_USERNAME ||
    password?.value !== process.env.ADMIN_PASSWORD
  ) {
    return redirect('/');
  }
}
export async function addArticle(
  name: string,
  author: string,
  date: string,
  content: string
) {
  await verify();
  const file = await fs.readFile(process.cwd() + '/app/articles.json', 'utf8');
  const article = JSON.parse(file);
  article.push({ title: name, author: author, date: date, content: content });
  await fs.writeFile(
    process.cwd() + '/app/articles.json',
    JSON.stringify(article),
    'utf8'
  );
}

export async function addHotTopic(
  name: string,
  author: string,
  date: string,
  content: string
) {
  await verify();
  const fileArticle = await fs.readFile(
    process.cwd() + '/app/articles.json',
    'utf8'
  );
  const fileHotTopic = await fs.readFile(
    process.cwd() + '/app/HotTopic.json',
    'utf8'
  );
  const article = JSON.parse(fileArticle);
  const newHotTopic = {
    title: name,
    author: author,
    date: date,
    content: content,
  };

  article.push(fileHotTopic);
  await fs.writeFile(
    process.cwd() + '/app/articles.json',
    JSON.stringify(article),
    'utf8'
  );

  await fs.writeFile(
    process.cwd() + '/app/HotTopic.json',
    JSON.stringify(newHotTopic),
    'utf8'
  );
}
