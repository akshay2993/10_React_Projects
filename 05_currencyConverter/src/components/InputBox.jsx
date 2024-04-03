import React, {useId} from 'react'

const InputBox = ({
  label,
  amount,
  amountDisabled,
  onAmountChange,
  onCurrencyChange,
  selectedCurrency = 'usd',
  currencyOptions = ['a'],
  currencyDisabled = false,
  className = "",
}) => {
  const id = useId()
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className='w-1-2'>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type='number'
          className='outline-none w-full py-2 bg-transparent'
          placeholder='Amount'
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className='w-1/2 flex flex-wrap text-right justify-end'>
        <p>Currency Type</p>
        <select
          className=''
          value={selectedCurrency}
          onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value) }}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => {
            return <option key={currency} value={currency}>{currency}</option>
          }) }
        </select>
      </div>
    </div>
  )
}

export default InputBox
