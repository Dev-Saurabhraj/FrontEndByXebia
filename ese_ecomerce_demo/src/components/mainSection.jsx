export default function MainSection({items}){
    return (<>
    <div className="grid grid-cols-5 gap-2">
    {items.map(item=>{
        return (<div key={item.id} className="w-60 h-60 bg-sky-300 rounded-2xl ">
            <h3>{item.title}</h3>
        </div>)
    })}

    </div>
    </>)
}