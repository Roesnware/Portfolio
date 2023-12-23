import React from 'react';

interface BlurProps {
  top: number;
  left: number;
}

const Blur: React.FC<BlurProps> = ({ top, left }) => {
  return (
    <div
      className='absolute blur w-[20px] h-[20px] bg-purple-700'
      style={{
        top: `${top}px`,
        left: `${left}px`,
        boxShadow: '0 0 90px #6C2BD9, 0 0 590px #6C2BD9, 0 0 90px #6C2BD9, 0 0 210px #6C2BD9',
      }}
    >
      {/* Content */}
    </div>
  );
};

export default Blur;