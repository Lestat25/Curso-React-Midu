import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "midudev",
    name: "Miguel Ángel Durán",
    isFollowing: true,
  },
  {
    userName: "pheralb",
    name: "Pablo Hernandez",
    isFollowing: false,
  },
  {
    userName: "elonmusk",
    name: "Elon Musk",
    isFollowing: true,
  },
  {
    userName: "TMChein",
    name: "Tomas Martinez",
    isFollowing: false,
  },
];

export function App() {
  // Un componente es una factoria de elementos. Un componente es una funcion
  // que devuelve un elemento y React renderiza el elemento.
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
