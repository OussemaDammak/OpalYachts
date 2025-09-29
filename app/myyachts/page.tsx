import PropertyList from "../components/properties/propertyList";
const MyYachtsPage =() =>{
return(
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
        
        <h1 className="my-6 text-2xl">My Yachts</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <PropertyList/>
                </div>
    </main>
        )
}
export default MyYachtsPage;