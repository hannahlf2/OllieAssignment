import Image from "next/image";
import styles from "./page.module.css";
import NewSignupForm from "./signupForm";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <NewSignupForm />
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
