
import React, { useEffect, useState } from "react";
import { useAuth, db } from '@poc-module-federation/common';
import { collection, DocumentData, getDocs } from "@firebase/firestore";
import { useHistory } from "react-router-dom";

export function App() {
  const { user } = useAuth();
  const [groups, setGroups] = useState([] as DocumentData[]);
  const history = useHistory();

  console.log(groups);

  useEffect(() => {
    async function fetchData() {
      const groups = (await getDocs(collection(db, "Group"))).docs.map((group) =>
        group.data()
      );

      setGroups(groups);
    }
    fetchData();
  }, []);

  console.log(history);

  return (
    <>
      <button onClick={() => history.push("/creators")}>
        go to creators mode
      </button>

      <div
        style={{
          textAlign: "center",
          backgroundColor: "red",
        }}
      >
        <h1>Members</h1>
      </div>

      <pre>{JSON.stringify(user, undefined, 2)}</pre>

      <h2>From firestore</h2>

      <ul>
        {groups.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
