import styles from "./PartnerScrollItem.module.scss";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

export default function PartnerScrollItem({
  partnerImage,
  partnerLink,
}: {
  partnerImage: StaticImageData;
  partnerLink: string;
}) {
  return (
    <Link href={partnerLink} className={styles["partner-scroll-item"]}>
      <Image src={partnerImage} alt="partner image" width={200} height={200} />
    </Link>
  );
}
