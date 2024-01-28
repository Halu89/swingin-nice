import React from "react";
import { getSchools } from "~utils/api.ts";

const Schools = async () => {
    const schools = await getSchools();

    return (
        <main className={"flex-1"}>
            <h1>Schools</h1>
            {JSON.stringify(schools, null, 2)}
        </main>
    );
};

// function Layout({ children }: { children: React.ReactNode }) {
//     return (
//         <div key="1" className={"flex min-h-screen flex-col"}>
//             <Navbar />
//             {children}
//             <Footer />
//         </div>
//     );
// }

export default Schools;
