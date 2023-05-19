import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface GuardedRouteProps {
  children: JSX.Element | React.ComponentType;
  user?: boolean | undefined;
}

export default function Guarded(props: GuardedRouteProps) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.user) {
      navigate("/login");
    }
  }, [props.user]);

  return <> {props.children} </>;
}
