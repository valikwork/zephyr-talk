import { UserPlus, LucideProps } from 'lucide-react'
import Logo from '../ui/Logo'

export const Icons = {
  Logo: (props: LucideProps) => (
    <Logo />
  ),
  UserPlus,
}

export type Icon = keyof typeof Icons