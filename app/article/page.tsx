'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '@/public/Logo.svg';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import article from '@/app/articles.json';
import hotNews from '@/app/HotTopic.json';
type Article = { title: string; content: string; author: string; date: string };

const ArticlePage = () => {
  const [articleData, setArticleData] = useState<Article | undefined>(
    undefined
  );
  const searchParams = useSearchParams();
  const articleTitle = searchParams.get('article');
  if (!articleTitle) {
    return (
      <p className="text-[100px] text-red-600 font-black w-screen h-screen flex justify-center items-center">
        505 Article not found :{'('}
      </p>
    );
  }
  useEffect(() => {
    setArticleData(article.find((item) => item.title === articleTitle));
    if (!articleData) {
      if (hotNews.title === articleTitle) {
        setArticleData(hotNews);
      }
    }
  }, []);
  if (!articleData) {
    return (
      <p className="text-[100px] text-red-600 font-black w-screen h-screen flex justify-center items-center">
        505 Article not found :{'('}
      </p>
    );
  }

  return (
    <div className="flex justify-center ">
      <main className="w-[100%] lg:w-[900] min-h-screen  lg:shadow-2xl shadow-none relative pr-[90px] pl-[90px]">
        <Link href={'/'} className="flex  absolute top-[15px] left-[25px]">
          <Image src={Logo} alt="Techflob" />
          <p className="text-[24px] font-black">TECHFLOB</p>
        </Link>
        <h1 className="mt-[100px] font-medium text-[40px] text-center mb-[60px] ">
          {articleData.title}
        </h1>
        <p className="absolute top-[170px] right-[90px]">{articleData.date}</p>
        <p className="absolute top-[195px] right-[90px]">
          {articleData.author}
        </p>

        <p className="text-[20px] leading-[32px] tracking-[1px] font-medium mb-[100px]">
          {articleData.content}
        </p>
      </main>
    </div>
  );
};

export default ArticlePage;
