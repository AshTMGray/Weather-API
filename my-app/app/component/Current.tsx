"use client";
import React from 'react';
import { getCurrentDate } from '../utills/currentDate';
import { FaLocationDot } from 'react-icons/fa6';


interface CurrentProps {
  data: {
    current: {
      condition: {
        icon: string;
        text: string;
      };
      temp_c: number;
      wind_mph: number;
    };
    location: {
      name: string;
    };
  };
}

const Current = ({ data }: CurrentProps) => {
  const currentDate = getCurrentDate();
  const weatherIcon = data.current.condition.icon;

  return (
    <div className="flex flex-col mb-8 md:mb-0 items-start gap-2 w-1/2">
      <div className="flex items-center">
        <div>
          <h1 className="text-2xl font-bold">Today</h1>
          <p className="p-2">{currentDate}</p>
        </div>
        {weatherIcon && (
          <div className="ml-4">
            <img
              className="w-18 h-18"
              src={weatherIcon}
              alt={data.current.condition.text}
            />
          </div>
        )}
      </div>
      <div className="flex items-center justify-between">
        <p className="text-4xl font-bold">{data.current.temp_c.toFixed()}°</p>
        </div>
        <p>Wind Speed: {data.current.wind_mph.toFixed()} mph</p>
           <span className="text-gray-600">{data.current.condition.text}</span>
      <div className="flex items-center px-2 py-2 bg-emerald-300 rounded-xl">
        <FaLocationDot className="mr-2" />
        <span>{data.location.name}</span>
      </div>
    </div>
  );
};

export default Current;