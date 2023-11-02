import Image from 'next/image';
import book from '../../../../../public/book.jpg';
import book1 from '../../../../../public/book1.jpg';
import book2 from '../../../../../public/book2.jpg';
import book3 from '../../../../../public/book3.jpg';
import book5 from '../../../../../public/book5.jpg';
import { BiChevronsRight } from 'react-icons/bi';

const Popular = () => {
  return (
    <div className="col-span-6 p-10">
      <div className="flex flex-col  gap-y-4">
        <h1 className="font-bold text-xl">Most Popular Books</h1>
        <div className="w-full flex items-center gap-x-1 rounded-lg min-h-20 border lg:gap-x-0">
          <Image
            src={book}
            alt={''}
            width={300}
            height={150}
            className="w-1/2 object-cover rounded-md lg:w-[300px] lg:h-[150px] "
          />
          <div className="w-full flex flex-col justify-between h-full px-2 lg:w-1/2 lg:px-4">
            <h1 className="text-sm font-semibold hover:text-gray-600 transition-all cursor-pointer">
              How to coding with React
            </h1>
            <p className="text-xs font-light md:mt-1 lg:mt-1">Lorem ipsum dolor sit</p>
            <button className="text-xs flex items-center justify-end font-thin mt-8 hover:font-normal transition-all group">
              <p>Read more</p>
              <BiChevronsRight
                size={20}
                className="text-gray-300 group-hover:text-black transition-all"
              />
            </button>
          </div>
        </div>
        <div className="w-full flex items-center gap-x-1 rounded-lg min-h-20 border lg:gap-x-0">
          <Image
            src={book1}
            alt={''}
            width={300}
            height={150}
            className="w-1/2 object-cover rounded-md lg:w-[300px] lg:h-[150px] "
          />
          <div className="w-full flex flex-col justify-between h-full px-2 lg:w-1/2 lg:px-4">
            <h1 className="text-sm font-semibold hover:text-gray-600 transition-all cursor-pointer">
              How to coding with React
            </h1>
            <p className="text-xs font-light md:mt-1 lg:mt-1">Lorem ipsum dolor sit</p>
            <button className="text-xs flex items-center justify-end font-thin mt-8 hover:font-normal transition-all group">
              <p>Read more</p>
              <BiChevronsRight
                size={20}
                className="text-gray-300 group-hover:text-black transition-all"
              />
            </button>
          </div>
        </div>
        <div className="w-full flex items-center gap-x-1 rounded-lg min-h-20 border lg:gap-x-0">
          <Image
            src={book2}
            alt={''}
            width={300}
            height={150}
            className="w-1/2 object-cover rounded-md lg:w-[300px] lg:h-[150px] "
          />
          <div className="w-full flex flex-col justify-between h-full px-2 lg:w-1/2 lg:px-4">
            <h1 className="text-sm font-semibold hover:text-gray-600 transition-all cursor-pointer">
              How to coding with React
            </h1>
            <p className="text-xs font-light md:mt-1 lg:mt-1">Lorem ipsum dolor sit</p>
            <button className="text-xs flex items-center justify-end font-thin mt-8 hover:font-normal transition-all group">
              <p>Read more</p>
              <BiChevronsRight
                size={20}
                className="text-gray-300 group-hover:text-black transition-all"
              />
            </button>
          </div>
        </div>
        <div className="w-full flex items-center gap-x-1 rounded-lg min-h-20 border lg:gap-x-0">
          <Image
            src={book3}
            alt={''}
            width={300}
            height={150}
            className="w-1/2 object-cover rounded-md lg:w-[300px] lg:h-[150px] "
          />
          <div className="w-full flex flex-col justify-between h-full px-2 lg:w-1/2 lg:px-4">
            <h1 className="text-sm font-semibold hover:text-gray-600 transition-all cursor-pointer">
              How to coding with React
            </h1>
            <p className="text-xs font-light md:mt-1 lg:mt-1">Lorem ipsum dolor sit</p>
            <button className="text-xs flex items-center justify-end font-thin mt-8 hover:font-normal transition-all group">
              <p>Read more</p>
              <BiChevronsRight
                size={20}
                className="text-gray-300 group-hover:text-black transition-all"
              />
            </button>
          </div>
        </div>
        <div className="w-full flex items-center gap-x-1 rounded-lg min-h-20 border lg:gap-x-0">
          <Image
            src={book5}
            alt={''}
            width={300}
            height={150}
            className="w-1/2 object-cover rounded-md lg:w-[300px] lg:h-[150px] "
          />
          <div className="w-full flex flex-col justify-between h-full px-2 lg:w-1/2 lg:px-4">
            <h1 className="text-sm font-semibold hover:text-gray-600 transition-all cursor-pointer">
              How to coding with React
            </h1>
            <p className="text-xs font-light md:mt-1 lg:mt-1">Lorem ipsum dolor sit</p>
            <button className="text-xs flex items-center justify-end font-thin mt-8 hover:font-normal transition-all group">
              <p>Read more</p>
              <BiChevronsRight
                size={20}
                className="text-gray-300 group-hover:text-black transition-all"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
