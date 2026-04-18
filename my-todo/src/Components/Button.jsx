function Button({ text }) {
  return (
    <button
      className="
        bg-blue-600 
        text-white 
        px-6 
        py-2 
        rounded-lg 
        font-medium 
        shadow-md 
        hover:bg-blue-700 
        hover:shadow-lg 
        active:scale-95 
        transition-all 
        duration-200
        mx-auto
      "
    >
      {text}
    </button>
  );
}

export default Button;