import React, { ChangeEvent, ChangeEventHandler } from "react";
import "./searchComponent.style.css";

type SearchCompProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  searchTitle?: string;
};

export default function SearchComponent({
  onChange,
  value,
  searchTitle,
}: SearchCompProps) {
  return (
    <span className="input-search-root">
      <span className="search-title">{searchTitle}</span>
      <div className="input-search-elm">
        <div className="left-icon-root">
          <i className="dx-icon-search search-icon "></i>
        </div>
        <div className="search-input">
          <input type="text" value={value} onChange={onChange} />
        </div>
        <div className="right-icon-root">
          <i className="dx-icon-close close-search-icon "></i>
        </div>
      </div>
    </span>
  );
}
