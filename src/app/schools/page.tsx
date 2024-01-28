import React from "react";
import { getSchools } from "~utils/api.ts";

const Schools = async () => {
    const schools = await getSchools();
    return (
        <>
            <h1>Schools</h1>
            {JSON.stringify(schools, null, 2)}
        </>
    );
};

export default Schools;
