import { products } from "../utils"
import CardLarge from "../components/CardLarge"
export default function Produk() {
    return <div className="container mx-auto px-6 flex flex-col gap-2">
        {/* {products.map((product, i) => <Link href={`/produk/${product.path}`} key={i}>
            <CardLarge path={product.path}/>
        </Link>)} */}
        {products.map((product, i) => <CardLarge path={product.path} key={i}/>)}
    </div>
}