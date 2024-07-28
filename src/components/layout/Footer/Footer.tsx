import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-container"]}>
        <div className={styles["footer-section"]}>
          <h3>Company</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles["footer-section"]}>
          <h3>Community</h3>
          <ul>
            <li>Discord</li>
            <li>Twitter</li>
            <li>Medium</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
