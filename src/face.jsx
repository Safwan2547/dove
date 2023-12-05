import React from 'react';

function Face() {
    return (
        <div className="flex bg-black items-center justify-center h-screen">
            <div className="bg-gray-200 scale-[200%] p-8 rounded-full">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                </div>
                <div className="mt-2 w-16 h-2 bg-gray-700 rounded-full"></div>
                <div className="mt-2 w-2 h-8 bg-gray-700 rounded-full"></div>
            </div>
        </div>
    );
}

export default Face;
