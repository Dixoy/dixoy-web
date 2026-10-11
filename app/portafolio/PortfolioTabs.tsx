import Link from "next/link";
import styles from "./portfolio-tabs.module.css";

export default function PortfolioTabs({ active }: { active: "diseno" | "filmaker" }) {
  return (
    <nav aria-label="Áreas del portafolio" className={styles.tabs}>
      <Link href="/portafolio/diseno" aria-current={active === "diseno" ? "page" : undefined}>Diseño</Link>
      <Link href="/portafolio/filmaker" aria-current={active === "filmaker" ? "page" : undefined}>Filmmaker</Link>
    </nav>
  );
}
