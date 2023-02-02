function Banner({ type, children, onClick }) {
  return (
    <button className={`${type} banner`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Banner;
