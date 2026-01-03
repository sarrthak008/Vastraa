import React from 'react'
import Skeleton from "react-loading-skeleton";

const ProductCard = () => {
  return (
    <div className="w-[260px] rounded-2xl bg-[#f5f5f5] p-3 shadow-sm hover:shadow-md transition">
      
      {/* Image */}
      <div className="relative overflow-hidden rounded-xl">
        <img
          src="https://images.unsplash.com/photo-1520975916090-3105956dac38"
          alt="Shadow Drip Hoodie"
          className="h-[300px] w-full object-cover"
        />

        {/* Optional badge */}
        <span className="absolute top-3 left-3 bg-purple-500 text-white text-xs px-3 py-1 rounded-full">
          NEW
        </span>
      </div>

      {/* Content */}
      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-900">
          SHADOW DRIP
        </h3>

        <p className="text-sm text-gray-500 leading-snug">
          A sleek, minimalist hoodie with dark tones and subtle reflective
          accents for an effortless street vibe.
        </p>

        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-bold text-gray-900">
            ₹899
          </span>

          <button className="rounded-full bg-black px-4 py-1.5 text-sm text-white hover:bg-gray-800 transition">
            view product
          </button>
        </div>
      </div>
    </div>
  );
}



const ProductCardSkeleton = () => {
  return (
    <div className="w-[260px] rounded-2xl bg-[#f5f5f5] p-3 shadow-sm">
      
      {/* Image Skeleton */}
      <Skeleton height={300} className="rounded-xl" />

      {/* Content */}
      <div className="mt-4 space-y-2">
        <Skeleton width={140} height={20} />
        <Skeleton count={2} height={14} />

        <div className="flex items-center justify-between mt-3">
          <Skeleton width={60} height={20} />
          <Skeleton width={70} height={32} borderRadius={999} />
        </div>
      </div>
    </div>
  );
};


export  {ProductCard , ProductCardSkeleton}


