export default function Button({ text, onClick }) {
    return (
      <button
        onClick={onClick}
        className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition-all duration-200 shadow-md"
      >
        {text}
      </button>
    );
}  