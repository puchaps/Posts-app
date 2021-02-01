import './loader.styles.scss'

const Loader = ({ loader, children }) => {
  if (loader) {
    return (
      <img 
        src="https://i.pinimg.com/originals/fa/93/b4/fa93b4ffee72b457f38998277337001d.gif" 
        alt="loader"
      />
    );
  };

  return (
    <>
      {children}
    </>
  );
};

export default Loader;