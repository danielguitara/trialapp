import { useState } from 'react'
import SelectDropdown from './components/SelectDropdown'
import './App.css'

function App() {

  const [options, setOptions] = useState([
    {label: 'Option 1', value: 'opt1'},
    {label: 'Long Option 2', value: 'opt2'},
    {label: 'Long Long Option 3', value: 'opt3'},
    {label: 'Long Long Long Option 4', value: 'opt4'},
    {label: 'Long Long Long Long Option 5', value: 'opt5'},
    {label: 'Long Long Long Long Long Option 6', value: 'opt6'}
  ])

  const handleChangeSelect = (e) => {
   console.log(e) 
  }

  return (
    <div className="App">
      <SelectDropdown 
        options={options}
        placeHolder="Please select..."
        onChange={(e) => handleChangeSelect(e)}
        withSearch={true}
        multiple={true}
      />
    </div>
  )
}

export default App
