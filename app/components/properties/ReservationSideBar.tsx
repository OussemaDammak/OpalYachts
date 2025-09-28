const ReservationSideBar =() => {

    return(
        <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
            <h2 className="mb-5 text-2xl">$200 per day</h2>
            <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                <label className="block font-bold text-xs">Guests</label>
                <select className="mb-1 w-full -ml-1 text-sm">
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                </select>
            </div>

            <div className="w-full mb-6 py-6 text-center text-white bg-opalyachts hover:bg-opalyachts-dark rounded-xl">
                <strong>Book</strong>
            </div>

            <div className="mb-4 flex justify-between align-center">
                <p>$200 * 4 days</p>
                <p>$800</p>
            </div>

            <div className="mb-4 flex justify-between align-center">
                <p>OpalYacht fee</p>
                <p>$20</p>
            </div>
            <hr/>
            <div className="mt-4 flex justify-between align-center font-bold">
                <p>Total</p>
                <p>$820</p>
            </div>
        </aside>
    )
}
export default ReservationSideBar;