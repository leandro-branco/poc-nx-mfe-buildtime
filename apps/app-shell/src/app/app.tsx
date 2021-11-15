/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { firebase } from '@poc-module-federation/common';

import {
  HomeIcon,
  SparklesIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'

import { SignIn } from "./pages/sign-in/sign-in";
import { SignUp } from "./pages/sign-up/sign-up";
import { WithAuthorization } from "./components/with-authorization/with-authorization";
import { Header } from "./components/header/header";
import { MainLayout } from "./components/main-layout/main-layout";

import { Main as Creators } from '@mfe/creators';
import { Main as Members } from '@mfe/members';

const navigation = [
  { name: 'Home', path: '/', components: null, icon: HomeIcon, current: false },
  { name: 'Members', path: '/members', components: Members, icon: SparklesIcon, current: false },
  { name: 'Creators', path: '/creators', components: Creators, icon: UserGroupIcon, current: false },
]

export function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<div />}>
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />

          <WithAuthorization>
            <MainLayout navigation={navigation} header={<Header />}>

              <Suspense fallback={<div>Fallback</div>}>
                <Switch>
                  <Route exact path="/" render={() => <div>Main</div>} />
                  <Route exact path="/creators" component={Creators} />
                  <Route exact path="/members" component={Members} />
                </Switch>
              </Suspense>
            </MainLayout>
          </WithAuthorization>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
