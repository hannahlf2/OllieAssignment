import Image from "next/image";
import styles from "./page.module.css";
import NewSignupForm from "./signupForm";

export default function Page() {
  return (
    <div>
      <main className={styles.main}>
        <div>
          <Image
            className={styles.image}
            src="https://picsum.photos/600/400"
            width={600}
            height={400}
            alt="Place holder image"
          />
        </div>
        <div className={styles.newSignupForm}>
          <NewSignupForm />
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
