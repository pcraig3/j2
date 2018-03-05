import Link from "next/link";

export default () => (
  <nav className="point-right">
    <Link href="/about">
      <a>about</a>
    </Link>
    <Link href="/portfolio">
      <a>portfolio</a>
    </Link>
    <Link href="/contact">
      <a>contact</a>
    </Link>
    <style jsx>{`
      nav {
        display: flex;
        flex-direction: column;
	      align-items: flex-end;
      }
    `}</style>
  </nav>
)
