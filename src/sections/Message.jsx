import MessageProfileCard from "../componenets/MessageProfileCard";

export default function Message(){
    return (
    <div className="w-[70%] h-screen bg-slate-50 flex justify-center items-center">
        <div className="w-[95%] h-[95%] bg-slate-100 rounded-md">
            <MessageProfileCard/>
        </div>
    </div>
    )
    
}