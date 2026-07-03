const Logo = ({ className = "h-10 w-auto" }) => {
  return (
    <img
      src="/Logo.svg"
      alt="Reconnect Counselling"
      className={className}
    />
  );
};

export default Logo;