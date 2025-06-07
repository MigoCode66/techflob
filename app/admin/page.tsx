import React from 'react';
import { verify } from './adminActions';

export default async function AdminPage() {
  await verify();
  return <div className=""></div>;
}
