import { Trash, ThumbsUp } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/84159436?v=4"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Fabiano do Nascimento</strong>
              <time title="11 de Janeiro" dateTime="2024-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentários">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabens</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
