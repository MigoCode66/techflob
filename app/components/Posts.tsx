import React from 'react';
import article from '@/app/articles.json';
import Link from 'next/link';

const Posts = () => {
  let direction = 'left';
  return (
    <ul className="flex felx-col gap-[43px] w-full">
      <ul className="flex justify-center w-full gap-[99px]">
        <li>
          <Link
            href={`/article/?article=${article[1].title}`}
            className="relative w-[300px] h-[390px]  flex flex-col gap-[20px] pt-[30px] pb-[30px] pl-[40px] pr-[40px]   bg-[#F8F8F8] rounded-[8px]"
          >
            <h2 className="text-[40px] font-medium">{article[0].title}</h2>
            <p className="leading-[35px] text-[20px] text-[#37333E]">
              {article[0].content.substr(0, 70)}...
              <b className="font-semibold underline cursor-pointer">
                Read More
              </b>
            </p>
          </Link>
        </li>

        <li>
          <Link
            href={`/article/?article=${article[1].title}`}
            className="relative w-[300px] h-[390px]  flex flex-col gap-[20px] pt-[30px] pb-[30px] pl-[40px] pr-[40px]   bg-[#F8F8F8] rounded-[8px]"
          >
            <h2 className="text-[40px] font-medium">{article[0].title}</h2>
            <p className="leading-[35px] text-[20px] text-[#37333E]">
              {article[0].content.substr(0, 70)}...
              <b className="font-semibold underline cursor-pointer">
                Read More
              </b>
            </p>
          </Link>
        </li>
        <li>
          <div className="relative w-[476px] h-[390px]  flex flex-col gap-[20px] pt-[30px] pb-[30px] pl-[40px] pr-[40px] rounded-[8px]"></div>
        </li>
      </ul>
    </ul>
  );
};

export default Posts;
