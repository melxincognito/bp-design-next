import Head from "next/head";

const Header = ({ Title }) => {
  return (
    <Head>
      <title> {Title}</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Libre+Bodoni&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

Header.defaultProps = { Title: "BP Design Co" };

export default Header;
