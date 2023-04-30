import "./PatrickContent.css";


import { PropsWithChildren } from "react";

export const PatrickContent = ({
  children,
}: PropsWithChildren): JSX.Element => <div className="patrick">{children}</div>;
