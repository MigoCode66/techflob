'use client';
import React from 'react';
import { login } from './aminLoginactions';

const AdminLoginPage: React.FC = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const username = (form.elements[0] as HTMLInputElement).value;
    const password = (form.elements[1] as HTMLInputElement).value;
    console.log(username, password);
    await login(username, password);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <form
        onSubmit={onSubmit}
        action=""
        className="flex flex-col gap-[10px] p-[30px] bg-[#F8F8F8] rounded-[8px]"
      >
        <label htmlFor="">username</label>
        <input
          type="text"
          className="border-[2px] border-[#000000] rounded-[8px]"
        />
        <label htmlFor="">password</label>
        <input
          type="password"
          className="border-[2px] border-[#000000] rounded-[8px]"
        />
        <button className="bg-[#000000] rounded-[8px] pl-[30px] pr-[30px] pt-[10px] pb-[10px] text-[#ffffff] cursor-pointer">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLoginPage;
