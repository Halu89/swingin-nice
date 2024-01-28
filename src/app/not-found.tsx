import Link from "next/link";
import RootLayout from "~/app/(site)/layout.tsx";
import { Button } from "~atoms/button.tsx";

export default function NotFound() {
    return (
        <RootLayout>
            <div className={"grid h-full place-items-center"}>
                <div>
                    <h2 className={"mb-3 text-4xl"}>Page inconnue</h2>
                    <Link href="/">
                        <Button variant={"link"} size={"icon"} className={"justify-normal"}>
                            Retour à l&apos;acceuil
                        </Button>
                    </Link>
                </div>
            </div>
        </RootLayout>
    );
}
