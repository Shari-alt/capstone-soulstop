import Navigation from "./Navigation";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Linkify from "react-linkify";
import { ReactComponent as Button } from "../images/Button.svg";
import SmallButton from "./SmallButton";
import "./Form.css";
import { addItemToLocalStorage } from "./Services/ClinicStorage";
