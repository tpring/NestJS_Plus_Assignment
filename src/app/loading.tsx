import React from 'react';

function LoadingPage() {
    return (
        <div className="flex items-center justify-center h-screen text-xl font-semibold">
            <p className="animate-bounce text-yellow-700">포켓몬을 불러오는 중...</p>
        </div>
    );
}

export default LoadingPage;
