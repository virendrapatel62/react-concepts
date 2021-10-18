import React from "react";
import { Shadow } from "./Card.module.css";

export default function Card(props) {
  return <div className={`${Shadow} ${props.className}`}>{props.children}</div>;
}
