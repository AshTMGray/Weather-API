"use client"

interface DayForecast {
  date: string;
  day: {
    condition: {
      icon: string;
      text: string;
    };
    maxtemp_c: number;
    mintemp_c: number;
  };
}

interface WeekForecastProps {
  data: {
    forecast?: {
      forecastday: DayForecast[];
    };
  };
}

const WeekForecast = ({ data }: WeekForecastProps) => {
  return (
    <div>
      <div className="text-2xl font-bold mb-4">7-day Weather</div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">
        {data.forecast?.forecastday.map((day, index) => (
          <div key={index} className="p-4 text-center bg-blue-300/40 rounded-lg">
            <p className="font-semibold">
              {new Date(day.date).toLocaleString('en-US', { weekday: 'short' })}
            </p>
            <img src={day.day.condition.icon} alt={day.day.condition.text} className="w-16 h-16" />
            <div className="flex justify-between">
              <p className="text-xl">{day.day.maxtemp_c.toFixed(0)}°</p>
              <p className="text-sm">{day.day.mintemp_c.toFixed(0)}°</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekForecast;