/** @jsx jsx */

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import Link from "../components/link/link";

import { jsx } from "@emotion/core";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 css={{ fontSize: 15 }}>
      Kevin Tran @ <a href="https://www.airwallex.com">Airwallex</a>
    </h1>
    <div css={{ paddingTop: 5, ">*": { marginRight: 10 } }}>
      <Link href="mailto:kevintranvs@outlook.com">Email</Link>
      <Link href="https://www.linkedin.com/in/kevin-tran-35a135108/" external>
        LinkedIn
      </Link>
      <Link href="https://github.com/kevin-tran" external>
        Github
      </Link>
    </div>
  </Layout>
);

export default IndexPage;
