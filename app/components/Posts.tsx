import React from 'react';
import article from '@/app/articles.json';
import Link from 'next/link';

const Posts = () => {
  let direction = 'left';
  console.log((article.length % 3) * -1 + 3);
  return (
    <ul className="flex felx-col gap-[43px] w-full flex-col">
      <ul className="flex justify-center w-full gap-[99px]">
        <li>
          <Link
            href={`/article/?article=${article[0].title}`}
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
      {[...Array((article.length - (article.length % 3)) / 3)].map(
        (_, index) => {
          return (
            <ul key={index} className="flex justify-center w-full gap-[99px]">
              {direction == 'left' ? (
                <li>
                  <Link
                    href={`/article/?article=${article[index + 2].title}`}
                    className="relative w-[476px] h-[390px]  flex flex-col gap-[20px] pt-[30px] pb-[30px] pl-[40px] pr-[40px] rounded-[8px] bg-[#F8F8F8]"
                  >
                    <h2 className="text-[40px] font-medium">
                      {article[index + 2].title}
                    </h2>
                    <p className="leading-[35px] text-[20px] text-[#37333E]">
                      {article[index + 2].content.substr(0, 160)}...
                      <b className="font-semibold underline cursor-pointer">
                        Read More
                      </b>
                    </p>
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    href={`/article/?article=${article[index + 1].title}`}
                    className="relative w-[300px] h-[390px]  flex flex-col gap-[20px] pt-[30px] pb-[30px] pl-[40px] pr-[40px]   bg-[#F8F8F8] rounded-[8px]"
                  >
                    <h2 className="text-[40px] font-medium">
                      {article[index + 1].title}
                    </h2>
                    <p className="leading-[35px] text-[20px] text-[#37333E]">
                      {article[index + 1].content.substr(0, 70)}...
                      <b className="font-semibold underline cursor-pointer">
                        Read More
                      </b>
                    </p>
                  </Link>
                </li>
              )}
              <li>
                <Link
                  href={`/article/?article=${article[index].title}`}
                  className="relative w-[300px] h-[390px]  flex flex-col gap-[20px] pt-[30px] pb-[30px] pl-[40px] pr-[40px]   bg-[#F8F8F8] rounded-[8px]"
                >
                  <h2 className="text-[40px] font-medium">
                    {article[index].title}
                  </h2>
                  <p className="leading-[35px] text-[20px] text-[#37333E]">
                    {article[index].content.substr(0, 70)}...
                    <b className="font-semibold underline cursor-pointer">
                      Read More
                    </b>
                  </p>
                </Link>
              </li>
              {direction == 'right' ? (
                <li>
                  <Link
                    href={`/article/?article=${article[index + 2].title}`}
                    className="relative w-[476px] h-[390px]  flex flex-col gap-[20px] pt-[30px] pb-[30px] pl-[40px] pr-[40px] rounded-[8px] bg-[#F8F8F8]"
                  >
                    <h2 className="text-[40px] font-medium">
                      {article[index + 2].title}
                    </h2>
                    <p className="leading-[35px] text-[20px] text-[#37333E]">
                      {article[index + 2].content.substr(0, 160)}...
                      <b className="font-semibold underline cursor-pointer">
                        Read More
                      </b>
                    </p>
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    href={`/article/?article=${article[index + 1].title}`}
                    className="relative w-[300px] h-[390px]  flex flex-col gap-[20px] pt-[30px] pb-[30px] pl-[40px] pr-[40px]   bg-[#F8F8F8] rounded-[8px]"
                  >
                    <h2 className="text-[40px] font-medium">
                      {article[index + 1].title}
                    </h2>
                    <p className="leading-[35px] text-[20px] text-[#37333E]">
                      {article[index + 1].content.substr(0, 70)}...
                      <b className="font-semibold underline cursor-pointer">
                        Read More
                      </b>
                    </p>
                  </Link>
                </li>
              )}
              <div className="hidden">
                {direction == 'left'
                  ? (direction = 'right')
                  : (direction = 'left')}
              </div>
            </ul>
          );
        }
      )}{' '}
      {article.length % 3 !== 0 ? (
        <ul className="flex justify-center w-full gap-[99px]">
          {direction == 'left' ? (
            <li>
              <Link
                href={`/article/?article=${
                  article[(article.length % -3) * -1 + 1].title
                }`}
                className="relative w-[476px] h-[390px]  flex flex-col gap-[20px] pt-[30px] pb-[30px] pl-[40px] pr-[40px] rounded-[8px] bg-[#F8F8F8]"
              >
                <h2 className="text-[40px] font-medium">
                  {article[(article.length % -3) * -1 + 1].title}
                </h2>
                <p className="leading-[35px] text-[20px] text-[#37333E]">
                  {article[(article.length % -3) * -1 + 1].content.substr(
                    0,
                    160
                  )}
                  ...
                  <b className="font-semibold underline cursor-pointer">
                    Read More
                  </b>
                </p>
              </Link>
            </li>
          ) : (
            <li>
              <Link
                href={`/article/?article=${
                  article[(article.length % -3) * -1 + 2].title
                }`}
                className="relative w-[300px] h-[390px]  flex flex-col gap-[20px] pt-[30px] pb-[30px] pl-[40px] pr-[40px]   bg-[#F8F8F8] rounded-[8px]"
              >
                <h2 className="text-[40px] font-medium">
                  {article[(article.length % -3) * -1 + 2].title}
                </h2>
                <p className="leading-[35px] text-[20px] text-[#37333E]">
                  {article[(article.length % -3) * -1 + 2].content.substr(
                    0,
                    70
                  )}
                  ...
                  <b className="font-semibold underline cursor-pointer">
                    Read More
                  </b>
                </p>
              </Link>
            </li>
          )}
          {article.length % 3 > 1 ? (
            <li>
              <Link
                href={`/article/?article=${
                  article[(article.length % 3) * -1 + 3].title
                }`}
                className="relative w-[300px] h-[390px]  flex flex-col gap-[20px] pt-[30px] pb-[30px] pl-[40px] pr-[40px]   bg-[#F8F8F8] rounded-[8px]"
              >
                <h2 className="text-[40px] font-medium">
                  {article[(article.length % 3) * -1 + 3].title}
                </h2>
                <p className="leading-[35px] text-[20px] text-[#37333E]">
                  {article[(article.length % 3) * -1 + 3].content.substr(0, 70)}
                  ...
                  <b className="font-semibold underline cursor-pointer">
                    Read More
                  </b>
                </p>
              </Link>
            </li>
          ) : (
            <li>
              <div className="relative w-[300px] h-[390px]  flex flex-col gap-[20px] pt-[30px] pb-[30px] pl-[40px] pr-[40px] rounded-[8px]"></div>
            </li>
          )}
          {article.length % 3 > 2 ? (
            direction == 'right' ? (
              <li>
                <Link
                  href={`/article/?article=${
                    article[(article.length % -3) * -1 + 3].title
                  }`}
                  className="relative w-[476px] h-[390px]  flex flex-col gap-[20px] pt-[30px] pb-[30px] pl-[40px] pr-[40px] rounded-[8px] bg-[#F8F8F8]"
                >
                  <h2 className="text-[40px] font-medium">
                    {article[(article.length % -3) * -1 + 3].title}
                  </h2>
                  <p className="leading-[35px] text-[20px] text-[#37333E]">
                    {article[(article.length % -3) * -1 + 3].content.substr(
                      0,
                      160
                    )}
                    ...
                    <b className="font-semibold underline cursor-pointer">
                      Read More
                    </b>
                  </p>
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  href={`/article/?article=${
                    article[(article.length % 3) * -1 + 3].title
                  }`}
                  className="relative w-[300px] h-[390px]  flex flex-col gap-[20px] pt-[30px] pb-[30px] pl-[40px] pr-[40px]   bg-[#F8F8F8] rounded-[8px]"
                >
                  <h2 className="text-[40px] font-medium">
                    {article[(article.length % 3) * -1 + 3].title}
                  </h2>
                  <p className="leading-[35px] text-[20px] text-[#37333E]">
                    {article[(article.length % 3) * -1 + 3].content.substr(
                      0,
                      70
                    )}
                    ...
                    <b className="font-semibold underline cursor-pointer">
                      Read More
                    </b>
                  </p>
                </Link>
              </li>
            )
          ) : direction == 'right' ? (
            <li>
              <div className="relative w-[476px] h-[390px]  flex flex-col gap-[20px] pt-[30px] pb-[30px] pl-[40px] pr-[40px] rounded-[8px]"></div>
            </li>
          ) : (
            <li>
              <div className="relative w-[300px] h-[390px]  flex flex-col gap-[20px] pt-[30px] pb-[30px] pl-[40px] pr-[40px] rounded-[8px]"></div>
            </li>
          )}
          <div className="hidden">
            {direction == 'left' ? (direction = 'right') : (direction = 'left')}
          </div>
        </ul>
      ) : null}
    </ul>
  );
};

export default Posts;
