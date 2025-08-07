import React from "react";
import { GameEvent } from "../data/events";

type Props = {
  event: GameEvent;
  onOptionSelect: (impacts: { [key: string]: number }) => void;
};

export default function EventCard({ event, onOptionSelect }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-xl">
      <h2 className="text-xl font-bold mb-4">{event.title}</h2>
      <p className="mb-6 text-gray-700">{event.description}</p>

      <div className="flex flex-col gap-4">
        {event.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onOptionSelect(option.impacts)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition duration-200"
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}
