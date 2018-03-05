import Link from "next/link";

export default () => (
  <footer>
    <Link href="https://pcraig3.ca">
      <a>@pcraig3</a>
    </Link>
    <style jsx>{`
      footer {
        position: fixed;
        bottom: 2px;
        right: 64px; /* 4px extra to account for the padding */
        font-size: 11px;
        font-family: sans-serif;
        text-transform: lowercase;
        opacity: 0.25;
      }

      footer:hover {
        opacity: .5;
      }

      footer a {
        color: #d43b1d;
      }
    `}</style>
  </footer>
)
