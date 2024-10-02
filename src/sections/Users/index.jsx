import { useState, useEffect } from "react";
import UserList from "./components/UsersList";


function UsersSection() {
  const url = "https://boolean-uk-api-server.fly.dev/ingeborgausteid/contact"
  const [userData, setUserData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setUserData(jsonData);
    };
    fetchData();
  }, []);

  console.log(userData)
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UserList userData={userData}/>
      </div>
    </section>
  )
}

export default UsersSection
