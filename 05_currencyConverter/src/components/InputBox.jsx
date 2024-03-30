import React from 'react'

const InputBox = ({
    label,
    amount,
    amountDisabled,
    onAmountChange,
    onCurrencyChange,
    selectedCurrency = 'usd'
    currencyOptions = [],
    
    className="",
}) => {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className='w-1-2'>
        <label>{label}</label>
        <input
        type='number'
        className='outline-none w-full py-2 bg-transparent'
        placeholder='Amount'
        disabled={amountDisabled}
        value={amount}
        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
    </div>
  )
}

export default InputBox
