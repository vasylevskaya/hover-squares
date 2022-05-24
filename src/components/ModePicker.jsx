import React, { useEffect, useState } from 'react'


const ModePicker = ({ setMode }) => {
  const [options, setOptions] = useState([])
  const [selectValue, setSelectValue] = useState("")

  useEffect(() => {
    fetch('https://demo7919674.mockable.io/')
      .then(resolve => resolve.json())
      .then(resolve => setOptions(resolve))
      .catch(error => console.error(error))
  }, [])

  const handleSelectChange = (event) => {
    if (event.target.value) {
      setSelectValue(+event.target.value)
    }
  }

  const handleStartButtonClick = () => {
    setMode(selectValue)
  }

  return (
    <div className="mode-picker">
      <select
        className="mode-picker_select"
        value={selectValue}
        onChange={handleSelectChange}
      >
        <option value="">Pick mode</option>
        {
          options.map((option) => (
            <option key={option.name} value={option.field}>
              {option.name}
            </option>
          ))
        }
      </select>
      <button
        type="button"
        className="mode-picker_button"
        onClick={handleStartButtonClick}
        disabled={!selectValue}
      >
        START
      </button>
    </div>
  )
}

export default ModePicker
