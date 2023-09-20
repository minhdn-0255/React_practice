import React from 'react';
import './input_field.css';

const InputField = ({ setInputValue, type, icon, title, text, password, styles }) => {
  return (
    <div className="inputField">
      {type == 1 && (
        <div className="type1InputField" style={styles}>
          <div className="first_icon">{icon}</div>
          <div className="field-ctn">
            <div className="tittle-ctn">{title}</div>
            <div className="input-ctn">
              {password ? (
                <input
                  type="password"
                  className="custom-input-field password-input"
                  placeholder="Enter your password"
                  onChange={e => setInputValue(e.target.value)}></input>
              ) : (
                <input
                  type="text"
                  className="custom-input-field"
                  placeholder={text}
                  onChange={e => setInputValue(e.target.value)}></input>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InputField;
