export default function Input({ label, type = "text", name, value, onChange }) {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300">{label}</label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full mt-1 p-3 border rounded-md bg-gray-800 text-white border-gray-600 focus:ring focus:ring-blue-400 focus:outline-none"
        />
      </div>
    );
}