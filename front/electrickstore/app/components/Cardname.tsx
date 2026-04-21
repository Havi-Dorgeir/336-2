interface Props{
    name: string;
    price: number;
}
export const CardName = ({name,price}: Props) =>
{
return(
    <div style={{
        display:"flex",
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between"
    }}>
        <p className="cards-title">{name}</p>
        <p className="cards-title">{price}</p>
    </div>
)
}