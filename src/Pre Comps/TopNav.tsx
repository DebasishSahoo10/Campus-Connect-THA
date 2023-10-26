import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const TopNav = () => {
    return (
        <div className="flex mb-3 items-center justify-between">
            <div className="flex gap-5 justify-center items-center">
                <img src="https://photos.wellfound.com/startups/i/9819723-4cd1303e83b5cb300b722519b15a41fc-medium_jpg.jpg?buster=1696763623" alt="" className="w-[50px] h-[auto] rounded-full" />
                <h1 className="font-bold text-md md:text-lg lg:text-2xl text-left">Campus-Connect</h1>
                <input type="text" placeholder="Search" className="border w-[350px] h-[40px] px-5 rounded-full hidden lg:block" />
            </div>
            <div className="flex gap-3 lg:gap-[50px] items-center ml-5">
                <a href="" className="text-[#A2A3A2]  lg:block hidden">Home</a>
                <a href="" className="text-[#A2A3A2]  lg:block hidden">Network</a>
                <a href="" className="text-[#A2A3A2]  lg:block hidden">Learn</a>
                <a href="" className="gap-2 justify-center items-center font-semibold  lg:flex hidden">Oppertunities<span className="bg-[#1B63F2] px-2  rounded-full text-white text-xs py-0.5 font-normal">Hiring</span></a>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className="block lg:hidden">
                        <button className="bg-[#252425] text-white py-1.5 px-3 rounded-lg">Menu</button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="flex flex-col w-[200px] justify-center items-center gap-2">
                        <a href="" className="text-[#A2A3A2]">Home</a>
                        <a href="" className="text-[#A2A3A2]">Network</a>
                        <a href="" className="text-[#A2A3A2]">Learn</a>
                        <a href="" className="gap-2 justify-center items-center font-semibold">Oppertunities</a>
                    </DropdownMenuContent>
                </DropdownMenu>
                <div className="flex items-center gap-1">
                    <Avatar className="w-[32px] lg:w-[40px] h-[auto]">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <ChevronDown className="w-[15px] h-[auto]" />
                </div>
            </div>
        </div >
    )
}