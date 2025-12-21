type FirstProps = {
  titolo: string;
  subtitle: string;
}

function Header(props: FirstProps) {
  return (
    <><p className="paragraph montserrat">{props.titolo}</p><p className="paragraph montserrat">{props.subtitle}</p></>
  )
}

export default Header
