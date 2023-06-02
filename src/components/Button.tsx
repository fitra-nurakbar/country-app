import { Link } from "react-router-dom";
import styles from "@/styles/Button.module.css";

interface Props {
  href?: string;
  children: string;
}

export default function Button(props: Props) {
  const { href, children } = props;

  if (href) {
    return (
      <Link to={href}>
        <button className={styles.button}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 5L4 12L11 19"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 12H20"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {children}
        </button>
      </Link>
    );
  } else {
    return (
      <button className={styles.button}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 5L4 12L11 19"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 12H20"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {children}
      </button>
    );
  }
}
