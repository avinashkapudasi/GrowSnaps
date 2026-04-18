import React from 'react';

const BusinessTeamIcon = ({ size = 200, className = "" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 500 500" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Woman on the Left */}
      <g id="woman">
        <path d="M123 154c-12 0-22 10-22 23v60l14 112h32l16-112 15 112h33l13-112v-60c0-13-10-23-22-23h-79z" fill="#4B5563"/>
        <path d="M148 245l-10 185h25l10-185h-25zm42 0l-10 185h25l10-185h-25z" fill="#6B7280"/>
        <path d="M145 170h35v85h-35z" fill="#FFFFFF"/>
        <path d="M142 165c0-15 10-28 23-28s23 13 23 28v15h-46v-15z" fill="#FDE047" opacity="0.4"/>
        <path d="M145 145c0-10 8-18 18-18s18 8 18 18c0 15-36 15-36 0z" fill="#EAB308" opacity="0.3"/>
        <path d="M135 155c0-12 5-25 25-25s25 13 25 25-10 25-25 25-25-13-25-25z" fill="#FFD29D"/>
        <path d="M135 155c0-15 5-30 30-30s30 15 30 30-10 20-15 20h-30c-5 0-15-5-15-20z" fill="#1F2937"/>
      </g>

      {/* Man in the Middle (Arms Crossed) */}
      <g id="center-man">
        <path d="M225 210c0-15 10-25 25-25h50c15 0 25 10 25 25v150h-100V210z" fill="#374151"/>
        <path d="M245 270l-20 60h30l15-60h-25zm50 0l-15 60h30l-20-60h-15z" fill="#4B5563"/>
        <path d="M245 220l5 150h20l5-150h-30zm30 0l5 150h20l5-150h-30z" fill="#6B7280"/>
        <path d="M255 125c0-10 10-20 20-20s20 10 20 20c0 20-40 20-40 0z" fill="#FFD29D"/>
        <path d="M272 135v30l-8-5h16l-8 5z" fill="#3B82F6"/>
        <path d="M240 180c5-5 50-5 55 0l15 35-15 10-30-20-30 20-15-10 15-35z" fill="#374151"/>
      </g>

      {/* Man on the Right (Red Tie) */}
      <g id="right-man">
        <path d="M350 160c0-15 10-25 25-25h60c15 0 25 10 25 25v120l-10 150h-35l-10-150h-10l-10 150h-35l-10-150V160z" fill="#374151"/>
        <path d="M390 185h30v80h-30z" fill="#FFFFFF"/>
        <path d="M400 185l5 70 5-70z" fill="#EF4444"/>
        <circle cx="405" cy="190" r="5" fill="#EF4444"/>
        <path d="M385 130c0-10 10-20 20-20s20 10 20 20c0 25-40 25-40 0z" fill="#FFD29D"/>
        <path d="M382 170c0-10 5-15 23-15s23 5 23 15v10h-46v-10z" fill="#374151"/>
      </g>
    </svg>
  );
};

export default BusinessTeamIcon;