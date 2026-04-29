import React from 'react';
import Link from 'next/link'

const NotFound = () => {
    return (
        <div>
            <h2>This page is not found</h2>
            <Link href="/">
                <button className="btn">Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;