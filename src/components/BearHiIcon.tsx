import React from 'react';

const BearHiIcon: React.FC<{ size?: number; className?: string }> = ({ size = 200, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Left Ear */}
      <circle cx="60" cy="45" r="22" fill="#8B5E3C" />
      <circle cx="60" cy="45" r="13" fill="#C4956A" />
      {/* Right Ear */}
      <circle cx="140" cy="45" r="22" fill="#8B5E3C" />
      <circle cx="140" cy="45" r="13" fill="#C4956A" />
      {/* Head */}
      <circle cx="100" cy="85" r="50" fill="#8B5E3C" />
      {/* Face / Muzzle */}
      <ellipse cx="100" cy="100" rx="28" ry="22" fill="#C4956A" />
      {/* Eyes */}
      <circle cx="82" cy="78" r="5" fill="#1F2937" />
      <circle cx="118" cy="78" r="5" fill="#1F2937" />
      {/* Eye shine */}
      <circle cx="84" cy="76" r="2" fill="white" />
      <circle cx="120" cy="76" r="2" fill="white" />
      {/* Nose */}
      <ellipse cx="100" cy="93" rx="6" ry="4.5" fill="#1F2937" />
      {/* Mouth */}
      <path d="M94 100 Q100 108 106 100" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Body */}
      <ellipse cx="100" cy="155" rx="35" ry="30" fill="#8B5E3C" />
      {/* Belly */}
      <ellipse cx="100" cy="158" rx="22" ry="20" fill="#C4956A" />
      {/* Left arm (resting) */}
      <path d="M65 145 Q50 160 55 175" stroke="#8B5E3C" strokeWidth="14" strokeLinecap="round" fill="none" />
      {/* Right arm (waving hi!) */}
      <path d="M135 145 Q155 125 150 100" stroke="#8B5E3C" strokeWidth="14" strokeLinecap="round" fill="none" />
      {/* Right paw */}
      <circle cx="150" cy="97" r="9" fill="#C4956A" />
      {/* Left paw */}
      <circle cx="55" cy="178" r="8" fill="#C4956A" />
      {/* Feet */}
      <ellipse cx="82" cy="183" rx="12" ry="8" fill="#8B5E3C" />
      <ellipse cx="118" cy="183" rx="12" ry="8" fill="#8B5E3C" />
    </svg>
  );
};

export default BearHiIcon;
