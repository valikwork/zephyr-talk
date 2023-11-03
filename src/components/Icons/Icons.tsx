import { UserPlus } from 'lucide-react'
import Logo from '../ui/Logo'

export const Icons = {
  Logo: () => (
    <Logo />
  ),
  UserPlus,
}

export type Icon = keyof typeof Icons