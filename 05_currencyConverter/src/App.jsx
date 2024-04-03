import { useState } from 'react'
import BgImage from './assets/money.jpg'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [ConvertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  console.log(currencyInfo)
  // const options = 

  return (
    <main className="w-screen h-screen flex items-center justify-center" style={{backgroundImage : `url(${BgImage})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
      <div className='w-full max-w-md h-auto outline-white rounded-lg bg-slate-300 flex flex-col'>
        <InputBox 
        label='From'
        amount={amount}
        amountDisabled
        onAmountChange
        onCurrencyChange
        selectedCurrency = 'usd'
        currencyOptions = {['a']}
        currencyDisabled = {false}
        className = "" />
      </div>
    </main>
  )
}

export default App
