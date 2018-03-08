import "../styles.scss"
import Link from "next/link";
import Layout from "../components/layout";

export default () => (
  <Layout title="contact julia craig dot CA" mainClass="contact point-left">
    <div>
      <p>Email</p>
      <p>
        <Link href="mailto:juliacraig3@cmail.carleton.ca">
          <a title="pls no spam">juliacraig3@cmail.carleton.ca</a>
        </Link>
      </p>
    </div>
    <div>
      <p>Twitter</p>
      <p>
        <Link href="https://twitter.com/JayCraig1101">
          <a title="pls tweet at me">@JayCraig1101</a>
        </Link>
      </p>
    </div>
    <div>
      <p>Facebook</p>
      <p>
        <Link href="https://www.facebook.com/julia.craig.904">
          <a title="pls be my friend">julia.craig.904</a>
        </Link>
      </p>
    </div>
    <style jsx>{`
      a {
        padding-right: 4px;
      }
    `}</style>
  </Layout>
);
