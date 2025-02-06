import React, {useEffect, useRef, useState} from "react";
import './selectDropdown.css'

const Icon = ({ isOpen }) => {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" stroke="#222" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className={isOpen ? 'translate' : ''}>
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
};

const CloseIcon = () => {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" stroke="#444" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
};

const SearchIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
      <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
    </svg>
  )
}

export const SelectDropdown = ({ optionLabel, placeHolder, options, multiple, withSearch, onChange}) => {

  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    setSearchValue("");
    if(showMenu && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showMenu])

  useEffect(() => {
    const handler = (e) => {
      if(inputRef.current && !inputRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    }

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    }
  })

  const handleInputClick = (e) => {
    setShowMenu(!showMenu);
  }

  const getDisplay = () => {
    if(!selectedValue || selectedValue.length === 0) {
      return placeHolder;
    }
    if(multiple) {
      return (
        <div className="dropdown-tags">
          {
            selectedValue.map((option, index) => (
              <div key={`${option.value}-${index}`} className="dropdown-tag-item">
                {option.label}
                <span onClick={(e) => onTagRemove(e, option)} className="dropdown-tag-close">
                  <CloseIcon />
                </span>
              </div>
            ))
          }
        </div>
      )
    }
    return selectedValue[0].label;
  }

  const removeOption = (option) => {
    return selectedValue.filter((o) => o.value !== option.value)
  }

  const onTagRemove = (e, option) => {
    e.stopPropagation();
    const newValue = removeOption(option);
    setSelectedValue(newValue);
    onChange(newValue);
  }
  
  const onItemClick = (option) => {
    let newValue;
    if (multiple) {
      if (selectedValue.findIndex((o) => o.value === option.value) >= 0) {
        newValue = removeOption(option);
      } else {
        newValue = [...selectedValue, option];
      }
    } else {
      newValue = [option];
    }
    setSelectedValue(newValue)
    onChange(newValue)
  }

  const isSelected = (option) => {
    if (multiple) {
      return selectedValue.filter((o) => o.value === option.value).length > 0;
    }

    if (!selectedValue) {
      return false;
    }

    return selectedValue.value === option.value;
  }

  const onSearch = (e) => {
    setSearchValue(e.target.value)
  }

  const getOptions = () => {
    if (!searchValue) {
      return options;
    }

    return options.filter(
      (option) => option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
    )
  }

  return (
    <div className="custom--dropdown">
      <div className="custom--dropdown-label">{optionLabel || "Label"}</div>
      <div className="custom--dropdown-container">
        <div ref={inputRef} onClick={handleInputClick} className="dropdown-input">
          <div className={`dropdown-selected-value ${!selectedValue || selectedValue.length === 0 ? 'placeholder' : ''}`}>{getDisplay()}</div>
          <div>
            <div className="dropdown-tool">
              <Icon isOpen={showMenu} />
            </div>
          </div>
        </div>

        {
          showMenu && (
            <div className="dropdown-menu">
              {
                withSearch && (
                  <div className="search-box">
                    <SearchIcon />
                    <input className="form-control" onChange={onSearch} value={searchValue} ref={searchRef} />
                  </div>
                )
              }
              {
                getOptions().map((option) => (
                  <div onClick={() => onItemClick(option)} key={option.value} className={`dropdown-item ${isSelected(option) && "selected"}`}>
                    {option.label}
                  </div>
                ))
              }
            </div>
          )
        }
      </div>
    </div>
  )
}

export default SelectDropdown