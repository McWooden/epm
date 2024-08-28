import { products } from "../utils"
import CardLarge from "../components/CardLarge"
export default function Produk() {
    return <div className="container mx-auto p-6 flex flex-col gap-2">
        {products.map((product, i) => <CardLarge path={product.path} key={i}/>)}
    </div>
}