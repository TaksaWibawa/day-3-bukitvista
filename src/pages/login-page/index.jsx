import { BaseLayout } from "../../layouts";
import { FormLogin } from "../../components";

export function LoginPage() {
	return (
		<BaseLayout className="justify-center min-h-screen">
			<FormLogin />
		</BaseLayout>
	);
}
