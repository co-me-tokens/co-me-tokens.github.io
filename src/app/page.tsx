'use client';

import clsx from 'clsx';
import Head from 'next/head';
import React, { useCallback, useEffect, useRef, useState } from 'react';
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
  const maskColor = 'bg-stone-300/70';
  const secondaryBgColor = 'bg-gray-100';
  const hlTextColor = "text-primary-600";
  const hl2TextColor = "text-red-700";
  const hlBgColor = "bg-primary-600";
  const linkIconClass = 'h-6 w-6 shrink-0';
  const citation_bibtex = `@misc{chen2025comeconfidenceguidedtokenmerging,
      title={Co-Me: Confidence-Guided Token Merging for Visual Geometric Transformers}, 
      author={Yutian Chen and Yuheng Qiu and Ruogu Li and Ali Agha and Shayegan Omidshafiei and Jay Patrikar and Sebastian Scherer},
      year={2025},
      eprint={2511.14751},
      archivePrefix={arXiv},
      primaryClass={cs.CV},
      url={https://arxiv.org/abs/2511.14751}, 
}`;
  const sliderItems: { title: string; content: React.ReactNode }[] = [
    {
      title: 'Motivation',
      content: (
        <div className='space-y-4 text-base leading-relaxed'>
          <video
            autoPlay muted controls loop
            className="rounded-md mx-auto shadow-sm w-full"
          >
            <source
              src="/video/CoMe-Intro-v5.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      ),
    },
    {
      title: 'Result',
      content: (
        <div className='space-y-4'>
          <video
            autoPlay muted controls loop
            className="rounded-md mx-auto shadow-sm w-full"
          >
            <source
              src="/video/Co-Me Speed Compare Video v3.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      ),
    },
    {
      title: 'Real-world Demo',
      content: (
        <div className='space-y-4 text-base leading-relaxed'>
          <video
            autoPlay
            muted
            loop
            controls
            className="rounded-md mx-auto shadow-sm w-full"
          >
            <source
              src="/video/Co-Me Realworld Demo v2.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      ),
    },
  ];
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    const middleChild = slider.children[1] as HTMLElement | undefined;
    if (!middleChild) return;
    const sliderWidth = slider.clientWidth;
    const tileWidth = middleChild.clientWidth;
    const targetScroll = middleChild.offsetLeft - (sliderWidth - tileWidth) / 2;
    slider.scrollLeft = targetScroll;
  }, []);

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
              Ruogu Li<span className="align-super text-sm">1</span>, <br />
              <UnderlineLink href="https://www.fieldai.com/">Ali Agha</UnderlineLink><span className="align-super text-sm">2</span>, &nbsp;
              <UnderlineLink href="https://www.fieldai.com/">Shayegan Omidshafiei</UnderlineLink><span className="align-super text-sm">2</span>, &nbsp;
              <UnderlineLink href="https://www.jaypatrikar.me">Jay Patrikar</UnderlineLink><span className="align-super text-sm">2</span>, &nbsp;
              <UnderlineLink href="https://www.ri.cmu.edu/ri-faculty/sebastian-scherer/">Sebastian Scherer</UnderlineLink><span className="align-super text-sm">1,2</span>
            </span>
          </div>
          <div className="container flex flex-row items-center space-x-8 justify-center text-lg">
            <ArrowLink className='mt-6' href='https://arxiv.org/abs/2511.14751' variant="light" size='large' icon={
              <img
                src='/svg/arxiv.svg'
                alt='arXiv logo'
                className={linkIconClass}
                loading='lazy'
              />
            }>
              arXiv Page
            </ArrowLink>
            <ArrowLink className='mt-6' href='https://github.com/co-me-tokens/CoMe' variant="light" size='large' icon={
              <img
                src='/svg/github.svg'
                alt='GitHub logo'
                className={linkIconClass}
                loading='lazy'
              />
            }>
              GitHub Repo
            </ArrowLink>
          </div>
        </div>
        <div className={clsx("absolute w-auto min-w-full min-h-full max-w-none z-10", maskColor)} />
        <div className="absolute bottom-4 left-4 z-20">
          <p className='mb-2'><span className='align-super text-sm'>1</span><img src='/images/cmu.png' className="h-8 inline-block ml-2" /></p>
          <p className='mb-2'><span className='align-super text-sm'>2</span><img src='/images/fieldai.png' className="h-6 inline-block ml-2" /></p>
        </div>
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full z-0 object-cover object-top"
        >
          <source
            src="/video/Co-Me-Method.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className={clsx(bgColor, textColor)}>
        <div className='layout py-12'>
          <h2 className='text-center pb-4'>Abstract</h2>
          <p className='text-pretty'>
            We propose <b>Confidence-Guided Token Merging</b> (Co-Me), an acceleration mechanism for visual geometric transformers without retraining or finetuning the base model.
            Co-Me employs a light-weight distilled confidence predictor to rank tokens and selectively merge low-confidence ones, effectively reducing computation while maintaining spatial coverage.
            Compared to similarity-based merging or pruning, the confidence signal in Co-Me reliably indicates regions emphasized by the transformer, enabling substantial acceleration without degrading performance.
            Co-Me applies seamlessly to various multi-view and streaming visual geometric transformers, achieving speedups that scale with sequence length.
            When applied to VGGT and MapAnything, Co-Me achieves up to <KatexSpan text="$11.3\times$" /> and <KatexSpan text="$7.2\times$" />  speedup, making visual geometric transformers practical for real-time 3D perception and reconstruction.
          </p>
          {/* <img
            src='/svg/Lineplot.svg'
            alt='speedup plot'
            className='mx-auto mt-4'
            loading='lazy'
          /> */}
        </div>
      </section>

      <section className='bg-dark text-gray-200 py-8'>
        {/* <div className='layout py-10 space-y-6'>
          <h2 className='text-center text-3xl font-semibold'>Highlights</h2>
        </div> */}
        <div className='relative'>
            <div
              ref={sliderRef}
              className='flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 px-48 pb-2 scrollbar-dark'
              aria-label='Confidence-guided token merging highlights slider'
            >
            {sliderItems.map((item) => (
              <article
                key={item.title}
                className='flex-none snap-center w-[85%] md:w-[70%] lg:w-[55%] bg-gray-900/50 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur'
              >
                <h3 className='text-2xl font-semibold mb-4'>{item.title}</h3>
                {item.content}
              </article>
            ))}
          </div>
          <div className='pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-dark to-transparent' />
          <div className='pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-dark to-transparent' />
        </div>
      </section>

      <section className={clsx(secondaryBgColor, textColor)}>
        <div className='layout pt-4 pb-4'>
          <h2 className='mt-12 mb-4'>Qualitative Comparison</h2>
        </div>
        <div className="wide-layout grid grid-cols-2 lg:grid-cols-4 gap-2 items-stretch pb-12">
          <ImageCompare
            leftSrc="/images/compare_1/CoMe.png"
            rightSrc="/images/compare_1/VGGT.png"
            leftAlt="Before"
            rightAlt="After"
            initial={0.5}
            leftLabel="Original VGGT"
            rightLabel="Co-Me Accelerated"
            // You can enforce aspect ratio if desired:
            className="aspect-[4/3] col-span-1"
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
            className="aspect-[4/3] col-span-1"
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
            className="aspect-[4/3] col-span-1"
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
            className="aspect-[4/3] col-span-1"
          />
          <ImageCompare
            leftSrc="/images/Set1/MAFast.png"
            rightSrc="/images/Set1/MA.png"
            leftAlt="Before"
            rightAlt="After"
            initial={0.5}
            leftLabel="Original MapAnything"
            rightLabel="Co-Me Accelerated"
            // You can enforce aspect ratio if desired:
            className="aspect-[4/3] col-span-1"
          />
          <ImageCompare
            leftSrc="/images/Set2/MAFast.png"
            rightSrc="/images/Set2/MA.png"
            leftAlt="Before"
            rightAlt="After"
            initial={0.5}
            leftLabel="Original MapAnything"
            rightLabel="Co-Me Accelerated"
            // You can enforce aspect ratio if desired:
            className="aspect-[4/3] col-span-1"
          />
          <ImageCompare
            leftSrc="/images/Set3/MAFast.png"
            rightSrc="/images/Set3/MA.png"
            leftAlt="Before"
            rightAlt="After"
            initial={0.5}
            leftLabel="Original MapAnything"
            rightLabel="Co-Me Accelerated"
            // You can enforce aspect ratio if desired:
            className="aspect-[4/3] col-span-1"
          />
          <ImageCompare
            leftSrc="/images/Set4/MAFast.png"
            rightSrc="/images/Set4/MA.png"
            leftAlt="Before"
            rightAlt="After"
            initial={0.5}
            leftLabel="Original MapAnything"
            rightLabel="Co-Me Accelerated"
            // You can enforce aspect ratio if desired:
            className="aspect-[4/3] col-span-1"
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
          <div className='pb-16' />
          <Figure
            img_src="/images/CoMe-Details.png"
            caption={
              <span>
                {/* The proposed mask, index mapping (left), merge (middle), and split (right) operators. Each sample generates a merge mask and index map via confidence ranking and bottom-<KatexSpan text="$p$" /> selection, followed by an exclusive scan for re-indexing. The index map is shared by merging and splitting operation, which aggregate (average or copy) and restore image tokens while preserving special tokens. Bottom-<KatexSpan text="$p$" /> masking guarantees consistent token counts for efficient batched processing. */}
                The proposed mask generation (left), merge (middle), and split (right) operators. Each sample generates an individual merge
                mask via confidence ranking and bottom-<KatexSpan text="$p$" /> selection. A shared index map is used by merging and splitting, which aggregate (average
                or copy) and restore image tokens while preserving special tokens. Our efficient implementation supports varying merging masks across
                samples in the batch as long as the number of merged tokens remains consistent.
              </span>
            }
            isDark={false}
            idx={2}
          />
          <div className='pb-16' />
        </div>
      </section>
      <section className={clsx(secondaryBgColor, textColor)}>
        <div className='layout pt-4 pb-48'>
          <h2 className='mt-12 mb-4'>Citation</h2>
          <pre className='ml-12'>
            {citation_bibtex}
          </pre>
        </div>
      </section>
    </main >
  );
}
