import { createContext, useEffect, useState } from 'react'

import * as S from './App.styles'

import Card from './components/Card'
import Toasty from './components/Toasty'

import { generateImage, toDataURL } from './helpers'

export const Context = createContext(null)

function App() {
  const [colorPicker, setColorPicker] = useState({
    displayColorPicker: false,
    displayBgColorPicker: false,
    bgColor: '#111111',
    color: '#ff8c00',
  })

  const [isImage, setImage] = useState({
    image: '',
    download: '',
    link: '',
  })

  const [loading, setLoading] = useState(false)

  const [openToasty, setOpenToasty] = useState(false)

  useEffect(() => {
    setImage(isImage)
  }, [isImage])

  const showPicker = (field) => {
    setColorPicker(
      field === 'Color'
        ? {
            ...colorPicker,
            displayColorPicker: !colorPicker.displayColorPicker,
          }
        : {
            ...colorPicker,
            displayBgColorPicker: !colorPicker.displayBgColorPicker,
          }
    )
  }

  const changePicker = {
    changeColorPicker: (color) => setColorPicker({ ...colorPicker, color: color.hex }),
    changeBgColorPicker: (color) => setColorPicker({ ...colorPicker, bgColor: color.hex }),
  }

  const onSubmit = async (values) => {
    setLoading(true)

    const newImage = generateImage(colorPicker.color, colorPicker.bgColor, values.website)

    const newLink = await toDataURL(newImage).then((dataUrl) => dataUrl)

    setTimeout(() => {
      setImage({
        image: newImage,
        download: newLink,
        link: values.website,
      })
      setLoading(false)
      setOpenToasty(true)
    }, 1000)
  }

  const pickerColor = {
    title: 'Color',
    colorPicker: colorPicker.color,
    changePicker: changePicker.changeColorPicker,
    showPicker: () => showPicker('Color'),
    displayPicker: colorPicker.displayColorPicker,
  }

  const pickerBgColor = {
    title: 'Background',
    colorPicker: colorPicker.bgColor,
    changePicker: changePicker.changeBgColorPicker,
    showPicker: () => showPicker('Background'),
    displayPicker: colorPicker.displayBgColorPicker,
  }

  return (
    <Context.Provider value={{ pickerColor, pickerBgColor }}>
      <S.Container>
        <S.Title>
          Welcome to <span>QrCode Creator</span>
        </S.Title>

        <Card isImage={isImage} onSubmit={onSubmit} loading={loading} />

        <S.Footer>
          Developed by
          <a href="https://github.com/devgustavomacedo" target="_blank" rel="noreferrer">
            {' '}
            @GustavoMacedo
          </a>
        </S.Footer>

        <Toasty
          onClose={() => setOpenToasty(false)}
          open={openToasty}
          severity={'success'}
          message={'QrCode successfully created!'}
        />
      </S.Container>
    </Context.Provider>
  )
}

export default App
