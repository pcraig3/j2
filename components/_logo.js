import Link from "next/link";

export default () => (
  <div className="logo">
    <Link href="/">
      <a>
        <span>julia</span>
        <br />
        <span>craig</span>
      </a>
    </Link>
    <style jsx>{`
      .logo {
        display: inline-block;
        font-size: 36px;
        margin-bottom: 60px;
      }
      .logo a {
        padding: 0;
        color: black;
      }
      .logo a, .logo a:visited {
        color: black;
      }
      .logo a:hover,
      .logo a:focus {
        background-color: inherit;
      }
      .logo a span {
        display: inline-block;
        background-color: bisque;
        border-bottom: 2px solid black;
        border-right: 2px solid black;
      }
      .logo a:hover span,
      .logo a:focus span {
        color: mediumslateblue;
        background-color: white;
        border-bottom: 2px solid mediumslateblue;
        border-right: 2px solid mediumslateblue;
      }
    `}</style>
  </div>
);
