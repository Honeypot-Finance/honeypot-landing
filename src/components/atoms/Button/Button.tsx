import Link from "next/link";
import styles from "./Button.module.scss";

export default function Button({
  children,
  linkTo,
  ...props
}: Readonly<{
  children: React.ReactNode;
  onClick?: () => void;
  linkTo?: string;
}>) {
  return linkTo ? (
    <Link href={linkTo}>
      <button {...props} className={styles["button"]}>
        {children}
      </button>
    </Link>
  ) : (
    <button {...props} className={styles["button"]}>
      {children}
    </button>
  );
}
