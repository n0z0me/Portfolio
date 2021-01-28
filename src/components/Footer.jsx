import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        Copyright &#169; n0z0me {new Date().getFullYear()}.
    </footer>
  );
}