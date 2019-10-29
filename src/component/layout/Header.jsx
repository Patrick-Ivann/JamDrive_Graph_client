import React, { useState } from "react";
import { navigatorCheck } from "../../utils/helpers";
import { useFilter, useTheme } from "../../graphql/handlers/layoutHandling";
import { RoundedInputAlt } from "../../styles/input";
import "../../styles/ThemeSwitchButton.css";
import { StyledHeader, Text } from "../../styles/layout";

export default function Header({ themeStore }) {
  const [form, setValues] = useState({
    filterWord: ""
  });

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const filter = useFilter();
  const theme = useTheme();
  let fileImg = null;
  navigatorCheck() === "Safari" ||
  navigatorCheck() === "IE" ||
  navigatorCheck() === "unknown"
    ? (fileImg = `${process.env.REACT_APP_ADRESS}/static/images/jampops.png`)
    : (fileImg = `${process.env.REACT_APP_ADRESS}/static/images/jampops.webp`);

  return (
    <>
      <StyledHeader className=" mb-4 md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
        <div className="flex items-center justify-between mb-4 md:mb-0">
          <h1 className="leading-none text-2xl text-grey-darkest">
            <img
              onClick
              className="logo mr-2"
              src={fileImg}
              alt="Logo"
              width="100px"
            />
            <div id="navbar-brand">
              {" "}
              <Text>JAMDRIVE</Text>{" "}
            </div>
          </h1>
        </div>
        <form className="flex justify-center  mb-4 w-full md:mb-0 md:w-1/4">
          {/*  <label className="hidden" htmlFor="search-form">
            Search
          </label>
          <input
            className="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full"
            placeholder="Search"
            type="text"
          /> */}

          <RoundedInputAlt
            id="filterWord"
            name="filterWord"
            value={form.filterWord}
            onChange={updateField}
            onKeyUp={() => filter({ word: form.filterWord })}
            type="search"
            placeholder="Recherche.."
          ></RoundedInputAlt>
        </form>
        <button
          onClick={event => {
            if (
              document.documentElement.getAttribute(
                "data-user-color-scheme"
              ) === "dark" ||
              document.documentElement.getAttribute(
                "data-user-color-scheme"
              ) === null
            ) {
              document.documentElement.setAttribute(
                "data-user-color-scheme",
                "light"
              );
              return theme();
            }
            document.documentElement.setAttribute(
              "data-user-color-scheme",
              "dark"
            );
            theme();
          }}
          class="[ toggle-button ] [ js-mode-toggle ]"
        >
          <span class="toggle-button__icon" aria-hidden="true"></span>
        </button>
      </StyledHeader>
    </>
  );
}
