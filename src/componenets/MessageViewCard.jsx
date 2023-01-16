export default function MessageViewCard(){
    return(
        <div className="w-[90%] min-h-[100px] p-3 flex items-center border-slate-500 border-[1px] rounded-md hover:shadow-md hover:shadow-blue-400">
            <img src="https://t4.ftcdn.net/jpg/02/73/46/99/360_F_273469972_ESU9Rq3eIpSrK3xddlIEyDh7vrslbiGg.jpg" className="w-[100px] rounded-full border-[2px] border-slate-500"/>
            <div className="flex flex-col gap-7">
                <div className="font-lexend text-lg ml-2">
                    Faruk
                </div>
                <div className="font-lexend text-sm ml-2">
                    Hello Vahap, how are you today?
                </div>
            </div>

            <div className="flex flex-col gap-20 items-center ml-2">
                <div className="font-lexend text-xs">
                    Jan 16
                </div>

                <div className="bg-blue-400 w-[20px] h-[20px] rounded-full text-white flex justify-center items-center text-sm">
                    2
                </div>
            </div>


        </div>
    )
}