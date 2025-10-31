'use client';

import clsx from 'clsx';
import Head from 'next/head';
import React, { useState } from 'react';
import '@/lib/env';

import Figure from '@/components/Figure';
import KatexSpan from '@/components/KaTeX';
import ImageCompare from '@/components/Compare';
import ArrowLink from '@/components/links/ArrowLink';
import UnderlineLink from '@/components/links/UnderlineLink';


export default function HomePage() {
  // const [mode, toggleMode] = useDarkMode();
  const textColor = 'text-gray-600';
  const bgColor = 'bg-white';
  const maskColor = 'bg-white/50';
  const secondaryBgColor = 'bg-gray-100';
  const hlTextColor = "text-primary-600";
  const hl2TextColor = "text-red-700";
  const hlBgColor = "bg-primary-600";

  const citation_bibtex = `put your bibTex here.`;

  return (
    <main>
      <Head>
        <meta name="google-site-verification" content="wORtJ7fq4X_rDll9Ym7DJ4lHQvSwbb87d_dflv28rN8" />
      </Head>
      <section className={
        clsx(bgColor, textColor,
          "relative flex items-center justify-center h-screen overflow-hidden"
        )
      }>
        <div className='layout z-20 relative flex min-h-screen flex-col items-center justify-center p-4 text-center'>
          <h1 className='mt-4 text-5xl mb-4'>Co-Me: {" "}
            <span className={hlTextColor}>Co</span>nfidence-Guided Token {" "}
            <span className={hlTextColor}>Me</span>rging {" "}
            for Visual Geometric Transformers
          </h1>
          <div className='container pb-6'>
            <span className='text-lg'>
              <UnderlineLink href="https://www.yutianchen.blog/">Yutian Chen</UnderlineLink><span className="align-super text-sm">1,2</span>, &nbsp;
              <UnderlineLink href="https://haleqiu.github.io/">Yuheng Qiu</UnderlineLink><span className="align-super text-sm">1</span>, &nbsp;
              Ruogu Li<span className="align-super text-sm">1</span>, &nbsp;
              <UnderlineLink href="https://www.jaypatrikar.me">Jay Patrikar</UnderlineLink><span className="align-super text-sm">2</span>, &nbsp;
              <UnderlineLink href="https://www.ri.cmu.edu/ri-faculty/sebastian-scherer/">Sebastian Scherer</UnderlineLink><span className="align-super text-sm">1,2</span>
            </span>
          </div>
          <div className="container flex flex-row items-center space-x-8 justify-center text-lg">
            <ArrowLink className='mt-6' href='https://github.com/co-me-tokens/CoMe' variant="light" size='large'>
              GitHub Repo
            </ArrowLink>
            <ArrowLink className='mt-6' href='https://arxiv.org/abs/2409.09479' variant="light" size='large'>
              arXiv Page
            </ArrowLink>
          </div>
        </div>
        <div className={clsx("absolute w-auto min-w-full min-h-full max-w-none z-10", maskColor)} />
        <div className="absolute bottom-4 left-4 z-20">
          <p><span className='align-super text-sm'>1</span>Carnegie Mellon University</p>
          <p><span className='align-super text-sm'>2</span>Field AI</p>
        </div>
        <video
          autoPlay
          loop
          muted
          className="absolute w-auto min-w-full min-h-full max-w-none z-0"
        >
          <source
            src="/video/hero_come_method.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className={clsx(bgColor, textColor)}>
        <div className='layout py-12'>
          <h2 className='text-center pb-4'>Abstract</h2>
          <p className='text-pretty'>
            TO BE FILLED HERE.
          </p>
        </div>
      </section>

      <section className={clsx(secondaryBgColor, textColor)}>
        <div className='layout pt-4 pb-4'>
          <h2 className='mt-12 mb-4'>Results</h2>
        </div>
        <div className="wide-layout grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch pb-12">
          
          <ImageCompare
              leftSrc="/images/compare_1/CoMe.png"
              rightSrc="/images/compare_1/VGGT.png"
              leftAlt="Before"
              rightAlt="After"
              initial={0.5}
              leftLabel="Original VGGT"
              rightLabel="Co-Me Accelerated"
              // You can enforce aspect ratio if desired:
              className="aspect-[4/3]"
          />
          <ImageCompare
              leftSrc="/images/compare_2/CoMe.png"
              rightSrc="/images/compare_2/VGGT.png"
              leftAlt="Before"
              rightAlt="After"
              initial={0.5}
              leftLabel="Original VGGT"
              rightLabel="Co-Me Accelerated"
              // You can enforce aspect ratio if desired:
              className="aspect-[4/3]"
          />
          <ImageCompare
              leftSrc="/images/compare_3/CoMe.png"
              rightSrc="/images/compare_3/VGGT.png"
              leftAlt="Before"
              rightAlt="After"
              initial={0.5}
              leftLabel="Original VGGT"
              rightLabel="Co-Me Accelerated"
              // You can enforce aspect ratio if desired:
              className="aspect-[4/3]"
          />
          <ImageCompare
              leftSrc="/images/compare_4/CoMe.png"
              rightSrc="/images/compare_4/VGGT.png"
              leftAlt="Before"
              rightAlt="After"
              initial={0.5}
              leftLabel="Original VGGT"
              rightLabel="Co-Me Accelerated"
              // You can enforce aspect ratio if desired:
              className="aspect-[4/3]"
          />
          <ImageCompare
              leftSrc="/images/compare_5/CoMe.png"
              rightSrc="/images/compare_5/VGGT.png"
              leftAlt="Before"
              rightAlt="After"
              initial={0.5}
              leftLabel="Original VGGT"
              rightLabel="Co-Me Accelerated"
              // You can enforce aspect ratio if desired:
              className="aspect-[4/3]"
          />
          <ImageCompare
              leftSrc="/images/compare_6/CoMe.png"
              rightSrc="/images/compare_6/VGGT.png"
              leftAlt="Before"
              rightAlt="After"
              initial={0.5}
              leftLabel="Original VGGT"
              rightLabel="Co-Me Accelerated"
              // You can enforce aspect ratio if desired:
              className="aspect-[4/3]"
          />
          <ImageCompare
              leftSrc="/images/compare_7/CoMe.png"
              rightSrc="/images/compare_7/VGGT.png"
              leftAlt="Before"
              rightAlt="After"
              initial={0.5}
              leftLabel="Original VGGT"
              rightLabel="Co-Me Accelerated"
              // You can enforce aspect ratio if desired:
              className="aspect-[4/3]"
          />
          <ImageCompare
              leftSrc="/images/compare_8/CoMe.png"
              rightSrc="/images/compare_8/VGGT.png"
              leftAlt="Before"
              rightAlt="After"
              initial={0.5}
              leftLabel="Original VGGT"
              rightLabel="Co-Me Accelerated"
              // You can enforce aspect ratio if desired:
              className="aspect-[4/3]"
          />
          <ImageCompare
              leftSrc="/images/compare_9/CoMe.png"
              rightSrc="/images/compare_9/VGGT.png"
              leftAlt="Before"
              rightAlt="After"
              initial={0.5}
              leftLabel="Original VGGT"
              rightLabel="Co-Me Accelerated"
              // You can enforce aspect ratio if desired:
              className="aspect-[4/3]"
          />
        </div>
      </section>

      <section className={clsx(bgColor, textColor)}>
        <div className='layout py-12'>
          <h2 className='pb-4'>Methods</h2>
          <Figure
            img_src="/images/CoMe-Method.png"
            caption="Overview of Co-Me. A lightweight module distilled from the frozen ViT backbone predicts per-token confidence from intermediate features. The resulting confidence is converted into a binary mask that guides token merging on the attention and MLP modules."
            isDark={false}
            idx={1}
          />
          <div className='pb-16'/>
          <Figure
            img_src="/images/CoMe-Details.png"
            caption={
              <span>
                The proposed mask, index mapping (left), merge (middle), and split (right) operators. Each sample generates a merge mask and index map via confidence ranking and bottom-<KatexSpan text="$p$" /> selection, followed by an exclusive scan for re-indexing. The index map is shared by merging and splitting operation, which aggregate (average or copy) and restore image tokens while preserving special tokens. Bottom-<KatexSpan text="$p$" /> masking guarantees consistent token counts for efficient batched processing.
              </span>
            }
            isDark={false}
            idx={2}
          />
          <div className='pb-16'/>
        </div>
      </section>
      {/* <section className={clsx(secondaryBgColor, textColor)}>
        <div className='layout pt-4 pb-48'>
          <h2 className='mt-12 mb-4'>Citation</h2>
          <pre className='ml-12'>
            {citation_bibtex}
          </pre>
        </div>
      </section> */}
    </main >
  );
}
