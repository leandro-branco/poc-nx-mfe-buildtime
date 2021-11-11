import './with-authorization.module.css';

import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from '@poc-module-federation/common';

/* eslint-disable-next-line */
export interface WithAuthorizationProps { }

export function WithAuthorization(props: React.PropsWithChildren<WithAuthorizationProps>) {
  const { user, initializing } = useAuth();
  const history = useHistory();

  useEffect(() => {
    const isAlreadyLoadedAndIsUnauthenticated = !initializing && !user;

    isAlreadyLoadedAndIsUnauthenticated && history.push("/signin");
  }, [user, initializing, history]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {props.children}
    </>
  );
}

export default WithAuthorization;