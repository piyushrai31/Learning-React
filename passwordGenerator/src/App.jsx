import { useState,useEffect,useCallback, useRef } from 'react'

function App() {

  const [password, setPassword] = useState('')
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [characters, setCharacters] = useState(false)
  const [uppercase, setUppercase] = useState(false)
  const [lowercase, setLowercase] = useState(false)

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let chars = ''
    if (numbers) chars += '0123456789'
    if (characters) chars += '!@#$%^&*()_+~`|}{[]:;?><,./-='
    if (uppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (lowercase) chars += 'abcdefghijklmnopqrstuvwxyz'

    let generatedPassword = ''
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length)
      generatedPassword += chars[randomIndex]
    }
    setPassword(generatedPassword)
  },[length,numbers,characters,lowercase,uppercase])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password]) 

  useEffect(() => {
    generatePassword()
  }, [length, numbers, characters,uppercase,lowercase])


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-2xl font-bold mb-4 text-center text-white">Password Generator</h1>  
         <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
                type="text"
                value={password}
                className="outline-none bg-white w-full py-1 px-3"
                placeholder="Password"
                readOnly
                ref={passwordRef}
            />
            <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            >copy</button>       
          </div>   
            <div className='flex text-sm44389356230580131170965011370875916683083279443422986109625850347832 gap-x-2'>
              <div className='flex items-center gap-x-1'>
                <input 
                type="range"
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e) => {setLength(e.target.value)}}
                  />
                  <label>Length: {length}</label>
              </div>
              <div className="flex items-center gap-x-1">
              <input
                  type="checkbox"
                  defaultChecked={numbers}
                  id="numberInput"
                  onChange={() => {
                      setNumbers((prev) => !prev);
                  }}
              />
              <label htmlFor="numberInput">Numbers</label>
              </div>
              <div className="flex items-center gap-x-1">
                  <input
                      type="checkbox"
                      defaultChecked={characters}
                      id="characterInput"
                      onChange={() => {
                          setCharacters((prev) => !prev )
                      }}
                  />
                  <label htmlFor="characterInput">Characters</label>
              </div>
              <div className="flex items-center gap-x-1">
                  <input
                      type="checkbox"
                      defaultChecked={uppercase}
                      id="alphabetsUppercase"
                      onChange={() => {
                          setUppercase((prev) => !prev )
                      }}
                  />
                  <label htmlFor="alphabetsUppercase">Uppercase</label>
              </div>
              <div className="flex items-center gap-x-1">
                  <input
                      type="checkbox"
                      defaultChecked={lowercase}
                      id="alphabetsLowercase"
                      onChange={() => {
                          setLowercase((prev) => !prev )
                      }}
                  />
                  <label htmlFor="alphabetsLowercase">Lowercase</label>
              </div>
            </div>         
      </div>
    </>
  )
}

export default App
