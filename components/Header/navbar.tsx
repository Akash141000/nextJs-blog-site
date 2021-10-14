import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className={styles.header}>
      <h3 className={styles.title}>
        <Link href="/">Blogger</Link>
      </h3>
      <ul>
        <li>
          <Link href="/posts">All Posts</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
