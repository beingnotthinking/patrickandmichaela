import "./MichaelaContent.css";

import { PropsWithChildren } from "react";

export const MichaelaContent = ({
  children,
}: PropsWithChildren): JSX.Element => (
  <div className="michaela">{children}</div>
);
