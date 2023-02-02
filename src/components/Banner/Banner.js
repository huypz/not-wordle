function Banner({ type, children }) {
  return (
    <div className={`${type} banner`}>
      {children}
    </div>
  );
}

export default Banner;
