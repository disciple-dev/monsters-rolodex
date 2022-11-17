import "./search-box.styles.css";

const SearchBox = ({ onChangeHanlder, className, placeholder }) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHanlder}
    />
  );
};

export default SearchBox;
