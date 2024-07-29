import Link from "next/link";
import styles from "./Button.module.scss";

export default function Button({
  children,
  linkTo,
  color,
  ...props
}: Readonly<{
  children: React.ReactNode;
  onClick?: () => void;
  linkTo?: string;
  color?: string;
}>) {
  return linkTo ? (
    <Link href={linkTo}>
      <button
        {...props}
        className={styles["button"]}
        style={{ backgroundColor: color }}
      >
        {children}
      </button>
    </Link>
  ) : (
    <button
      {...props}
      className={styles["button"]}
      style={{ backgroundColor: color }}
    >
      {children}
    </button>
  );
}
