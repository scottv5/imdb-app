import Image from "next/image";
import Link from "next/link";

import {
  BsFillCalendarEventFill,
  BsFillHandThumbsUpFill,
} from "react-icons/bs";

const Card = ({ title, image, id, date, avgScore }) => {
  let avgScoreStr = `${avgScore}`;
  if (avgScoreStr.length > 3) avgScoreStr = avgScoreStr.slice(0, 3);
  if (avgScoreStr.length === 1) avgScoreStr = avgScoreStr + ".0";

  return (
    <>
      <Link
        href={`/movie/${id}`}
        className="cursor-pointer sm:p-3 sm:mb-auto sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group"
      >
        <h2 className="text-center text-lg font-semibold pb-2 truncate">
          {title}
        </h2>
        <Image
          src={`https://image.tmdb.org/t/p/w500/${image}`}
          width={500}
          height={300}
          alt="title"
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="/loading-animation.svg"
        />
        <div className="flex justify-between pt-2">
          <div className="flex space-x-2 items-center">
            <BsFillCalendarEventFill />
            <span>{date}</span>
          </div>
          <div className="flex space-x-2 items-center">
            <BsFillHandThumbsUpFill />
            <span>{avgScoreStr}</span>
          </div>
        </div>
      </Link>
      <div className="mb-8 sm:hidden"></div>
    </>
  );
};

export default Card;
