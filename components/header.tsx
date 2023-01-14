import { useState } from "react";
import { BsMoon } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { MdOutlineToggleOff } from "react-icons/md";
import styled from "styled-components";

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100vw;
  background-color: #dd4b4a;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Image = styled.img`
  height: 35px;
  padding: 0 30px;
`;

const optionTheme = {
  dark: {
    transform: "rotate(180deg)",
    width: "50px",
    fontSize: "40px",
    color: "white",
  },
};

export default function Header() {
  const [theme, setTheme] = useState(false);
  const [themeOptions, setThemeOptions] = useState(false);

  const changeTheme = () => {
    setTheme(!theme);
    setThemeOptions(!themeOptions);
  };

  const changeThemeOptions = () => {
    setThemeOptions(!themeOptions);
  };

  return (
    <HeaderStyle>
      <Image
        src="https://cdn.riderize.com/miscellaneous/logo-pokedex.png"
        alt="logo"
      />
      {themeOptions ? (
        <div>
          <FiSun style={{ fontSize: "25px", color: "white" }} />
          <MdOutlineToggleOff
            onClick={changeTheme}
            style={
              theme
                ? optionTheme.dark
                : { width: "50px", fontSize: "40px", color: "white" }
            }
          />
          <BsMoon style={{ fontSize: "20px", color: "white" }} />
        </div>
      ) : (
        <Image
          src="../settings.svg"
          alt="settings"
          onClick={changeThemeOptions}
        />
      )}
    </HeaderStyle>
  );
}
