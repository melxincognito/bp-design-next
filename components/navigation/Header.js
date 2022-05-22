import Head from "next/head";

const Header = ({ Title }) => {
  return (
    <Head>
      <title> {Title}</title>
    </Head>
  );
};

Header.defaultProps = { Title: "BP Design Co" };

export default Header;
