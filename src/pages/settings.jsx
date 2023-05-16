import React, { useContext } from "react";
import { AppContext } from "../context/appContext";

const SettingsScreen = () => {
  const { handleLogOut } = useContext(AppContext);

  return <>SettingsScreen</>;
};

export default SettingsScreen;
