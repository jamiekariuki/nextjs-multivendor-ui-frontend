import "./page.scss";
//import { Hero } from "@/components/page components/home/hero/hero";
import { PaymentTag } from "@/components/page components/home/payment tag/payment.tag";
import { ProductsSlider } from "@/components/page components/home/products slider/product.slider";

export default function Home() {
	return (
		<div className="home">
			{/* <Hero /> */}
			<div className="home-contaniner">
				<PaymentTag />
				<ProductsSlider />
			</div>
		</div>
	);
}
