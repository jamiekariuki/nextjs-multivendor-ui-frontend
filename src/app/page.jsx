import MapTag from "@/components/page components/home/map tag/map.tag";
import "./page.scss";
import { PageContent } from "@/components/page components/home/page content/page.content";
import { FreelancerSlider } from "@/components/page components/home/freelancers slider/freelancer.slider";
import { EscroContent } from "@/components/page components/home/escro content/escro.content";
import { Hero } from "@/components/page components/home/hero/hero";
import { PaymentTag } from "@/components/page components/home/payment tag/payment.tag";
import { ProductsSlider } from "@/components/page components/home/products slider/product.slider";

export default function Home() {
	return (
		<div className="home">
			<Hero />

			<div className="home-contaniner">
				<PaymentTag />
			</div>
			<EscroContent />
			<div className="home-contaniner">
				<ProductsSlider />
			</div>
			<PageContent />
			<div className="home-contaniner">
				<FreelancerSlider />
			</div>
			<Hero />
			<EscroContent />
			<PageContent />

			<div className="home-contaniner">
				<MapTag />
			</div>
		</div>
	);
}
