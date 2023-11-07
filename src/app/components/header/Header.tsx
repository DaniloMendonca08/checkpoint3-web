import { useRouter } from "next/navigation"
import { Button } from "../button/Button"
import { Logo } from "../logo/Logo"
import { ElementHeader, HeaderContainer } from "./Header.style"

export const Header = () => {

  const router = useRouter()

  const handleNext = () => {
    router.push('/login')
  }

  return (
    <ElementHeader>
      <HeaderContainer>
        <Logo />
        <Button onClick={handleNext}>Login</Button>
      </HeaderContainer>
    </ElementHeader>
  )
}