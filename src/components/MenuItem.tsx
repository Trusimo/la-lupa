type MenuItemProps = {
  nome: string
  prezzo: number
}

function MenuItem(props: MenuItemProps) {
  return (
    <li>
      {props.nome} - €{props.prezzo}
    </li>
  )
}

export default MenuItem
