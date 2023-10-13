"use client"
import { BiSearchAlt } from 'react-icons/bi';

interface InputProps {
  handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ handleSearch, setLocation }: InputProps) => {
  return (
    <form className="flex items-center w-full max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Enter a town, city or postcode..."
        className="w-full py-3 px-4 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        onKeyDown={handleSearch}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        type="submit"
        className="bg-teal-500 text-white p-3 rounded-lg ml-2"
      >
        <BiSearchAlt />
      </button>
    </form>
  );
};

export default Input;