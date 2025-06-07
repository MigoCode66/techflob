'use client';
import React from 'react';
import { addArticle, verify } from './adminActions';

export default function AdminPage() {
  const onSubmitAddArticle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements[0] as HTMLInputElement).value;
    const author = (form.elements[1] as HTMLInputElement).value;
    const date = (form.elements[2] as HTMLInputElement).value;
    const content = (form.elements[3] as HTMLInputElement).value;
    await addArticle(name, author, date, content);
  };

  const onSubmitAddHotTopic = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements[0] as HTMLInputElement).value;
    const author = (form.elements[1] as HTMLInputElement).value;
    const date = (form.elements[2] as HTMLInputElement).value;
    const content = (form.elements[3] as HTMLInputElement).value;
    await addArticle(name, author, date, content);
  };

  return (
    <div className="ml-[10px] flex gap-[100px]" onLoad={verify}>
      <h1 className="text-[50px] font-medium ">Admin Console</h1>

      <form
        action=""
        className="flex flex-col justify-start w-[500px]"
        onSubmit={onSubmitAddArticle}
      >
        <h2 className="text-[30px] font-medium ">Add article</h2>
        <label>Tittle</label>
        <input
          type="text"
          className="border-[2px] w-[300px] border-[#000000] rounded-[8px]"
        />
        <label htmlFor="">Author</label>
        <input
          type="text"
          className="border-[2px] w-[300px] border-[#000000] rounded-[8px]"
        />
        <label htmlFor="">Date</label>
        <input
          type="Date"
          className="border-[2px] w-[300px] border-[#000000] rounded-[8px]"
        />
        <label htmlFor="">content</label>
        <textarea className="w-[500px] h-[500px] border-[2px] border-[#000000] rounded-[8px]"></textarea>
        <button className="bg-[#000000] rounded-[8px] pl-[30px] pr-[30px] pt-[10px] pb-[10px] text-[#ffffff] cursor-pointer mt-[20px]">
          Add
        </button>
      </form>
      <form
        action=""
        className="flex flex-col justify-start w-[500px]"
        onSubmit={onSubmitAddHotTopic}
      >
        <h2 className="text-[30px] font-medium ">Add Hot Topic</h2>
        <label>Tittle</label>
        <input
          type="text"
          className="border-[2px] w-[300px] border-[#000000] rounded-[8px]"
        />
        <label htmlFor="">Author</label>
        <input
          type="text"
          className="border-[2px] w-[300px] border-[#000000] rounded-[8px]"
        />
        <label htmlFor="">Date</label>
        <input
          type="Date"
          className="border-[2px] w-[300px] border-[#000000] rounded-[8px]"
        />
        <label htmlFor="">content</label>
        <textarea className="w-[500px] h-[500px] border-[2px] border-[#000000] rounded-[8px]"></textarea>
        <button className="bg-[#000000] rounded-[8px] pl-[30px] pr-[30px] pt-[10px] pb-[10px] text-[#ffffff] cursor-pointer mt-[20px]">
          Add
        </button>
      </form>
    </div>
  );
}
