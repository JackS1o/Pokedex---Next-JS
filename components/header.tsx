import { useContext, useState } from "react";
import { BsMoon } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { MdOutlineToggleOff } from "react-icons/md";
import {
  HeaderStyle,
  Image,
  optionTheme,
} from "../styles/headerStyles";
import { MyContext } from "../context/context";

const dark = {
  background: "#202123",
}

const light = {
  background: "#dd4b4a",
}

export default function Header() {
  const { theme, setTheme } = useContext(MyContext) as any;
  const [themeOptions, setThemeOptions] = useState(false);

  const changeTheme = () => {
    setTheme(!theme);
    setThemeOptions(!themeOptions);
  };

  const changeThemeOptions = () => {
    setThemeOptions(!themeOptions);
  };

  return (
    <HeaderStyle theme={theme ? dark : light}>
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
