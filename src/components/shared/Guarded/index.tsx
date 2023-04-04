import React from "react";
import { useNavigate } from "react-router-dom";

interface GuardedRouteProps {
  children: JSX.Element | React.ComponentType;
  user: string;
}

export default function Guarded(props: GuardedRouteProps) {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!props.user || props.user === "" || props.user === undefined) {
      return navigate("/login");
    }
  }, [props.user]);

  return <>{props.children}</>;
}
