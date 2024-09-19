import { useState, ChangeEvent, KeyboardEvent } from "react";

interface InputSearchProps {
  onSearch: (keyWord: string) => void;
}
function InputSearch(props: InputSearchProps) {
  const { onSearch } = props;
  const [text, setText] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const keyWord = event?.target?.value?.trim() || "";
    setText(keyWord);
    if (keyWord === "") {
      onSearch(keyWord);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(text);
    }
  };

  return (
    <input
      placeholder="Enter search keywords..."
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      style={{
        padding: "8px",
        border: "1px solid #E0E0E0",
        background: "#fff",
        borderRadius: " 5px",
        color: "black",
        height: "20px",
        width: "300px",
        marginBottom: "10px",
      }}
    />
  );
}

export default InputSearch;
