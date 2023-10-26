import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export const Card = () => {
    return (
        <div className="text-left flex flex-col gap-2 w-[100%] rounded-xl shadow-xl p-[20px] mt-5 h-[max] border">
            <div className="flex items-center gap-3">
                <Avatar className="h-[20px] w-[auto]">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="text-[#ABAAAA]">Debasish Sahoo</p>
            </div>
            <h3 className="text-xl font-semibold">Need a team mate for agri-tech project</h3>
            <p className="text-[#ABAAAA]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo consequuntur eos labore distinctio aut quaerat, quod mollitia nam eaque impedit neque odio ut, delectus officiis sequi amet quia ipsum laudantium?</p>
            <div className="flex flex-col lg:flex-row md:flex-row justify-between mt-5 gap-5 lg:gap-0">
                <div className="flex gap-3">
                    <div className="rounded-full bg-[#BADDF4] w-[80px] text-sm h-[28px] flex justify-center items-center">ML</div>
                    <div className="rounded-full bg-[#75E3D8] w-[80px] text-sm h-[28px] flex justify-center items-center">Project</div>
                    <div className="rounded-full bg-[#FEE9B5] w-[80px] text-sm h-[28px] flex justify-center items-center">Agri-Tech</div>
                </div>
                <button className="bg-[#252425] w-[100%] md:w-[85px] lg:w-[85px] h-[35px] rounded-[5px] text-white">Inquire</button>
            </div>
        </div>
    )
}