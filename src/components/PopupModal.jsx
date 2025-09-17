import React from "react";
import Button from "./Button";

const PopupModal = ({ onClick, status, title, description, buttonTitle }) => {
  const isSuccess = status === "success";

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/40 z-10'>
      <div className='bg-white rounded-2xl shadow-xl w-[500px] p-8 text-center'>
        {/* Circle with icon */}
        <div className='flex items-center justify-center'>
          {isSuccess ? (
            // Success icon
            <svg
              width='280'
              height='280'
              viewBox='0 0 280 280'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <circle
                cx='140'
                cy='140'
                r='95'
                fill='#03AB5D'
                fillOpacity='0.1'
              />
              <circle
                cx='140'
                cy='140'
                r='109.5'
                stroke='#EEF2F6'
              />
              <circle
                cx='140'
                cy='140'
                r='124.5'
                stroke='#F8FAFC'
              />
              <circle
                cx='140'
                cy='140'
                r='139.5'
                stroke='#FCFCFD'
              />
              <circle
                cx='140'
                cy='142'
                r='80'
                fill='#03AB5D'
                fillOpacity='0.1'
              />
              <circle
                cx='140'
                cy='142'
                r='65'
                fill='#03AB5D'
                fillOpacity='0.1'
              />
              <rect
                x='89'
                y='90'
                width='100'
                height='100'
                rx='50'
                fill='#93D3A7'
              />
              <path
                d='M133.667 149.563L124.885 140.781L121.115 144.552L133.667 157.104L159.552 131.219L155.781 127.448L133.667 149.563Z'
                fill='white'
              />
            </svg>
          ) : (
            // Failed icon
            <svg
              width='280'
              height='280'
              viewBox='0 0 280 280'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <circle
                cx='140'
                cy='140'
                r='95'
                fill='#F04438'
                fillOpacity='0.1'
              />
              <circle
                cx='140'
                cy='140'
                r='109.5'
                stroke='#EEF2F6'
              />
              <circle
                cx='140'
                cy='140'
                r='124.5'
                stroke='#F8FAFC'
              />
              <circle
                cx='140'
                cy='140'
                r='139.5'
                stroke='#FCFCFD'
              />
              <circle
                cx='140'
                cy='142'
                r='80'
                fill='#F04438'
                fillOpacity='0.1'
              />
              <circle
                cx='140'
                cy='142'
                r='65'
                fill='#F04438'
                fillOpacity='0.1'
              />
              <rect
                x='89'
                y='90'
                width='100'
                height='100'
                rx='50'
                fill='#F9B3AC'
              />
              <path
                d='M125 155L155 125M155 155L125 125'
                stroke='white'
                strokeWidth='8'
                strokeLinecap='round'
              />
            </svg>
          )}
        </div>

        {/* Title */}
        <h2 className='text-2xl font-semibold text-primary-text'>{title}</h2>

        {/* Description */}
        <p className='text-secondary-text text-sm mt-2 mx-5'>{description}</p>

        {/* Button */}
        <Button onClick={onClick}>{buttonTitle}</Button>
      </div>
    </div>
  );
};

export default PopupModal;
