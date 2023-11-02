import Image from 'next/image';
import book from '../../../../../public/book.jpg';
import book4 from '../../../../../public/book4.jpg';
import { BiChevronsRight } from 'react-icons/bi';

const Artikel = () => {
  return (
    <div className="col-span-6 p-10">
      <div className="flex flex-col gap-y-10">
        <div className="flex items-center w-full justify-between">
          <h1 className="font-bold text-xl">New Article</h1>
          <p className="text-sm font-thin">02 November 2023</p>
        </div>
        <div className="flex flex-col w-full rounded-md overflow-hidden border">
          <Image src={book} alt="book" />
          <div className="p-2">
            <h1 className="text-lg font-semibold hover:text-gray-600 transition-all cursor-pointer">
              How to coding with React
            </h1>
            <p className="font-light text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptas? ....
            </p>
          </div>
          <button className="text-sm font-thin flex items-center justify-end border-t p-2 mt-4 group hover:font-normal transition-all duration-300">
            <p>Read more</p>
            <BiChevronsRight
              size={20}
              className="text-gray-300 group-hover:text-black transition-all"
            />
          </button>
        </div>
        <div className="flex flex-col w-full rounded-md overflow-hidden border">
          <Image src={book4} alt="book" />
          <div className="p-2">
            <h1 className="text-lg font-semibold hover:text-gray-600 transition-all cursor-pointer">
              How to coding with React
            </h1>
            <p className="font-light text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptas? ....
            </p>
          </div>
          <button className="text-sm font-thin flex items-center justify-end border-t p-2 mt-4 group hover:font-normal transition-all duration-300">
            <p>Read more</p>
            <BiChevronsRight
              size={20}
              className="text-gray-300 group-hover:text-black transition-all"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Artikel;
