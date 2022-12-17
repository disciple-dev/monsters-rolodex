import { ChangeEventHandler } from "react";
import "./search-box.styles.css";

interface ISearchBoxProps {
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  className?: string;
  placeholder?: string;
}

const SearchBox = ({
  onChangeHandler,
  className,
  placeholder,
}: ISearchBoxProps) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
