import React from "react";
import style from "./Container.module.scss";

interface ContainerProps {
    children: React.ReactNode;
    padding?: string
}

const Container = ({children, padding = "5em 2em"}: ContainerProps) => {
  return (
    <div className={style.container} style={{padding}}>
        {children}
    </div>
  )
}

export default Container;