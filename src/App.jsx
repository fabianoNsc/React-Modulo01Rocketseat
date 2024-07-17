import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./global.css";

import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/84159436?v=4",
      name: "Fabinho do Pneu",
      role: "Garoto de Programa - Putão",
    },
    content: [
      { type: "paragraph", content: "Lorem ipsum dolor sit amet" },
      { type: "paragraph", content: "blanditiis. Beatae provident." },
      { type: "link", content: "joao.design/doctocare" },
    ],
    publishedAt: new Date("2024-07-16 19:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/84159436?v=4",
      name: "Cleitinho do Grau",
      role: "Putão",
    },
    content: [
      { type: "paragraph", content: "cristianDoPneu ipsum cristianDoPneu sit amet" },
      {
        type: "paragraph",
        content: "blanditiis. Beatae cristianDoPneu.",
      },
      { type: "link", content: "cristianDoPneu.design/doctocare" },
    ],
    publishedAt: new Date("2022-07-15 21:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
