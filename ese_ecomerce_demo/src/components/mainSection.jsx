export default function MainSection({items}){
    return (<>
    <div className="grid grid-cols-4 gap-2 bg-gray-200">
    {items.map(item=>{
        return (<div key={item.id} className="w-60 h-60 bg-white rounded-2xl m-5 ml-5">
            <h3 className="font-bold flex p-5 justify-center">{item.title}</h3>
        </div>);
        
    })}
    </div>
    </>)
}