import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import { selectUser, login, logout } from "./features/counter/userSlice";
import { auth } from "./firebase";
import Login from "./Login";
import Loading from "./Loading";
import { Route, Switch } from "react-router-dom";

function App() {
  const user = useSelector(selectUser);
  const loading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      {loading && <Loading />}
      {user ? (
        <Switch>
          <Route path="/">
            <Sidebar />
            <Chat />
          </Route>
        </Switch>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
