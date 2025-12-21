type FirstProps = {
  titolo: string;
  subtitle: string;
}

function First(props: FirstProps) {
  return (
    <><p className="paragraph montserrat">{props.titolo}</p><p className="paragraph montserrat">{props.subtitle}</p></>
  )
}

export default First
