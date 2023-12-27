import React from 'react'

function AdvanceComponent(props) {
    const color = props.color;
    const backgroundColor = color === 'green' ? 'bg-teal-50' : color === 'blue' ? 'bg-blue-100' : 'bg-blue-100';
    const fontColor = color === 'green' ? 'text-emerald-400' : color === 'blue' ? 'text-blue-400' : 'text-blue-400' ; 
  
  return (
    <div className={`flex flex-col  p-3 w-[521px] gap-3  rounded-md ${backgroundColor}`}>
        <div className={`justify-start text-base   font-semibold leading-loose font-['Poppins'] ${fontColor}`}>
        {props.title}
      </div>
        <div className='flex justify-between' >
            <div>
                <p className="text-slate-500 text-xs font-normal font-sans leading-none" > TL </p>
                <p className={`text-center text-2xl pt-0 mt-0  font-semibold leading-loose font-['Poppins'] ${fontColor}`}>
                    {props.cost}
                </p>
            </div>
            <div>
                <p className="text-slate-500 text-xs font-normal font-sans leading-none"  >{props.dayTitle}</p>
                <p className={`text-center text-2xl font-semibold leading-loose font-['Poppins'] ${fontColor}`}>
                    {props.day}
                </p>
            </div>
            <div>
                
            </div>
            
        </div>
    </div>
  )
}

export default AdvanceComponent