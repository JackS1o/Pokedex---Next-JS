import styled from 'styled-components'

export default function Header() {
  const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 100vw;
    background-color: #dd4b4a;
  `;

  const Image = styled.img`
    height: 35px;
    padding: 0 30px;
  `;


  return (
    <Header>
      <Image src="https://cdn.riderize.com/miscellaneous/logo-pokedex.png" alt="logo" />
      <Image src="../settings.svg" alt="settings" />
    </Header>
  )
}
