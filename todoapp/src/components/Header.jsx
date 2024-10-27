import styles from "../css/header.module.css";
export default function Header() {
  return (
    <div>
      {" "}
      <h1 className={styles.header}>My To-Do List</h1>
    </div>
  );
}
