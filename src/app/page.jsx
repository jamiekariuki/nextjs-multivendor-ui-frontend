import { PageContent } from "@/components/page components/home/page content/page.content";
import "./page.scss";
import { FreelancerSlider } from "@/components/page components/home/freelancers slider/freelancer.slider";
import { EscroContent } from "@/components/page components/home/escro content/escro.content";
import { Hero } from "@/components/page components/home/hero/hero";
import { PaymentTag } from "@/components/page components/home/payment tag/payment.tag";
import { ProductsSlider } from "@/components/page components/home/products slider/product.slider";

import { Mode } from "@/components/navbar/menu/dark mode/dark.mode";

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
		</div>
	);
}
