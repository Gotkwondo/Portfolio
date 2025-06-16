// import Image from "next/image";

import ImageDisplayLayout from '@/components/modules/image/ImageDisplayLayout';
import testimg from '@/assets/민초.jpg';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      test text
      <ImageDisplayLayout animationType="none">
        <Image className='h-full w-full' src={testimg} alt="민초 이미지" />
      </ImageDisplayLayout>
    </>
  );
}
