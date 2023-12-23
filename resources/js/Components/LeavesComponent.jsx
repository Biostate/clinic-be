import React from 'react';

function LeavesComponent(props) {
  const color = props.color;
  const backgroundColor = color === 'green' ? 'bg-teal-50' : color === 'blue' ? 'bg-blue-100' : 'bg-blue-100';
  const fontColor = color === 'green' ? 'text-emerald-400' : color === 'blue' ? 'text-blue-400' : 'text-blue-400' ; 

  return (
    <div className={`flex flex-col  p-3  w-[521px] rounded-md ${backgroundColor}`}>
      <div className={`justify-start text-base  font-semibold leading-loose font-['Poppins'] ${fontColor}`}>
        {props.title}
      </div>
      <div className='justify-center  '>
        <p className={`text-center text-2xl font-semibold leading-loose font-['Poppins'] ${fontColor}`}>
          
          {props.value}
        </p>
      </div>
    </div>
  );
}

export default LeavesComponent;
