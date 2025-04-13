import { useEffect, useState } from "react";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://example.com/user")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>No user data</div>;

  return (
    <div>
      <h1>User Info</h1>
      <p>ID: {user.id}</p>
      <p>
        Name: {user.firstName} {user.lastName}
      </p>
    </div>
  );
}

export default App;
