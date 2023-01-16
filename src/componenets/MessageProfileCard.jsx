export default function MessageProfileCard(){
    return(
        <div className="w-full h-[13%] bg-slate-200 flex justify-between items-center p-3 rounded-t-md shadow-md">
            <div className="flex gap-3 justify-center items-center">
                <img src="https://cdn.dribbble.com/users/1162077/screenshots/4649464/skatter-programmer_still_2x.gif?compress=1&resize=400x300" className="w-[85px] h-[85px] rounded-full border-[2px] border-green-500"/>
                
                <div className="flex flex-col">
                    <div className="font-lexend text-lg">
                        Vahap
                    </div>
                    
                    <div className="flex justify-center items-center gap-1">
                        <div className="w-[8px] h-[8px] bg-green-400 rounded-full"></div>
                        <div className="font-lexend text-sm">Active</div>
                    </div>
                    

                </div>

            </div>



             <form className="w-[30%]">   
                    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="block font-lexend w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                    
                    </div>
            </form>
        </div>
    )
}