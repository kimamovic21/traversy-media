import Image from "next/image"
import Link from "next/link"
import logo from '../img/logo.jpg';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
  

const Navbar = () => {
  return (
    <div className="bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between">
        <Link href='/'>
            <Image 
                src={logo} 
                alt="Letter K Logo" 
                width={40}
                className="rounded-md"
            />
        </Link>

        <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
                <Avatar>
                    <AvatarImage 
                        src='https://avatars.githubusercontent.com/u/79793398?v=4' 
                        alt="Kerim" 
                    />
                    <AvatarFallback className="text-white">
                        Kerim
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href='/profile'>Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href='/auth'>Logout</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}

export default Navbar