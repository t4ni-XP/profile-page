"use client";

import React, { useState } from "react";

const DarkModeSwitcher = () => {
  const [theme, setTheme] = useState("dark");

  const switchTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <label
        style={{
          display: "inline-flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={switchTheme}
          style={{ display: "none" }} // チェックボックスは非表示
        />
        <span
          style={{
            width: "50px",
            height: "25px",
            backgroundColor: theme === "dark" ? "#000000" : "#cccccc",
            borderRadius: "25px",
            position: "relative",
            transition: "background-color 0.3s",
          }}
        >
          <span
            style={{
              content: '""',
              position: "absolute",
              width: "20px",
              height: "20px",
              backgroundColor: "#ffffff",
              borderRadius: "50%",
              top: "50%",
              left: theme === "dark" ? "5px" : "25px",
              transform: "translateY(-50%)",
              transition: "left 0.3s",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          />
        </span>
        <span style={{ marginLeft: "10px", fontSize: "16px" }}>
          {theme === "dark" ? "Dark Mode" : "Light Mode"}
        </span>
      </label>
    </div>
  );
};

export default DarkModeSwitcher;
