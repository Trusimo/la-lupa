type HeaderProps = {
  titolo: string;
};

function Header(props: HeaderProps) {
  return <h1 className="hero-title playfair-display">{props.titolo}</h1>;
}

export default Header;