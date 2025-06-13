const ErrorMessage = ({ message }) => {
  return (
    <div className="bg-red-500/80 text-white px-4 py-2 rounded-md mb-4">
      ⚠️ {message}
    </div>
  );
};

export default ErrorMessage;
