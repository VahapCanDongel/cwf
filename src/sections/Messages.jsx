import MessageViewCard from "../componenets/MessageViewCard";

export default function Messages(){
    return(
        <div className="w-[30%] h-screen bg-slate-50 border-r-[2px] border-r-slate-600 overflow-auto">
            <div className="sticky top-0 bg-slate-50 p-4 shadow-md">
                <div className="flex justify-between items-center p-3">
                    <div className="font-lexend text-xl ">Messages</div>

                    <div className="flex">
                        <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-[45px] h-[45px] bg-blue-400 p-2 rounded-md text-slate-50">
                            <path d="M3.6 19.2s-1.2 0-1.2-1.2 1.2-4.8 7.2-4.8 7.2 3.6 7.2 4.8c0 1.2-1.2 1.2-1.2 1.2h-12Zm6-7.2a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2Z"></path>
                            <path fill-rule="evenodd" d="M18.6 8.4a.6.6 0 0 1 .6.6v1.8H21a.6.6 0 1 1 0 1.2h-1.8v1.8a.6.6 0 1 1-1.2 0V12h-1.8a.6.6 0 1 1 0-1.2H18V9a.6.6 0 0 1 .6-.6Z" clip-rule="evenodd"></path>
                        </svg>
                    </div>

                </div>

                <div className="w-full flex justify-center">
                    <form className="w-[90%]">   
                        <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="default-search" className="block font-lexend w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                            <button type="submit" className="text-white font-lexend absolute right-2.5 bottom-2.5 bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>
                </div>
            </div>


            <div className="w-full flex justify-center items-center mt-4 flex-col gap-3">
                <MessageViewCard/>
                <MessageViewCard/>
                <MessageViewCard/>
                <MessageViewCard/>
                <MessageViewCard/>
                <MessageViewCard/>
            </div>
           




        </div>
    )
}