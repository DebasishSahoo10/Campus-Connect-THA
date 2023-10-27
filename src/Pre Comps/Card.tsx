import { JobPosts } from "@/Database/DB"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type CardPropType = {
    post : JobPosts
}

export const Card : React.FC<CardPropType> = ({post}) => {
    const postCategory = post.category === "Human Resource" ? "HR" : post.category
    return ( 
        <div className="text-left flex flex-col gap-2 w-[100%] rounded-xl shadow-xl p-[20px] mt-5 h-[max] border">
            <div className="flex items-center gap-3">
                <Avatar className="h-[20px] w-[auto]">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="text-[#ABAAAA]">{post.createdBy}</p>
            </div>
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-[#ABAAAA]">{post.description}</p>
            <div className="flex flex-col lg:flex-row md:flex-row justify-between mt-5 gap-5 lg:gap-0">
                <div className="flex gap-3">
                    <div className="rounded-full bg-[#BADDF4] lg:w-[100px] md:w-[100px] w-[100%] text-xs lg:text-sm h-[28px] flex justify-center items-center">{postCategory}</div>
                    <div className="rounded-full bg-[#75E2D9] lg:w-[100px] md:w-[100px] w-[100%] text-xs lg:text-sm h-[28px] flex justify-center items-center">{post.type}</div>
                    <div className="rounded-full bg-[#E8DBEE] lg:w-[100px] md:w-[100px] w-[100%] text-xs lg:text-sm h-[28px] flex justify-center items-center">{post.payType.split("/")[0]}</div>
                </div>
                <button className="bg-[#252425] w-[100%] md:w-[85px] lg:w-[85px] h-[35px] rounded-[5px] text-white">Inquire</button>
            </div>
        </div>
    )
}