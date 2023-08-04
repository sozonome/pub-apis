'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/lib/components/ui/button';

const Page404 = () => {
  return (
    <>
      <div className="w-100 mx-auto sm:w-[70%] md:w-[60%]">
        <Image
          src="/404 Error-pana.svg"
          width={1200}
          height={1200}
          alt="error"
        />
      </div>
      <div className="text-center text-xs">
        <a
          href="https://stories.freepik.com/web"
          target="_blank"
          rel="noopener noreferrer"
        >
          Illustration by Freepik Stories
        </a>
      </div>

      <div className="my-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Page not Found.</h2>
          <p>It&apos;s Okay!</p>
        </div>

        <div className="mt-4 text-center">
          <Button asChild>
            <Link href="/">Let&apos;s Head Back</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Page404;
