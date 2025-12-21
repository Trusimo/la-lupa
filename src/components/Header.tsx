type HeaderProps = {
  titolo: string;
  subtitle: string;
}

function Header(props: HeaderProps) {
  return (
    <><h1 className="hero-title playfair-display">{props.titolo}</h1><p className="subheader montserrat">{props.subtitle}</p></>
  )
}

export default Header
