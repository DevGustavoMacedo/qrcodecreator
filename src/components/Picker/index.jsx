/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { Box } from '@mui/material'

import { SketchPicker } from 'react-color'

import { useContext } from 'react'
import { Context } from '../../App'

const Picker = ({ title }) => {
  const { pickerColor, pickerBgColor } = useContext(Context)
  const picker = title === 'Color' ? pickerColor : pickerBgColor

  return (
    <Box
      css={css`
        display: flex;
        justify-content: space-between;
        width: 65%;
  
        @media (max-width: 770px) {
          width: 100%;
        }
  
        @media (max-width: 770px) {
          font-size: 0.9rem;
        }
      `}
    >
      <span>{picker.title}: </span>
      <Box
        onClick={picker.showPicker}
        sx={{
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        }}
      >
        <Box
          sx={{
            width: '36px',
            height: '14px',
            borderRadius: '2px',
            background: picker.colorPicker,
  
            '@media (max-width: 280px)': {
              width: '20px',
            },
  
            '@media (min-width: 1900px)': {
              height: '24px',
            },
          }}
        />
      </Box>
  
      {picker.displayPicker ? (
        <Box
          sx={{
            position: 'absolute',
            zIndex: '2',
          }}
        >
          <Box
            onClick={picker.showPicker}
            sx={{
              position: 'fixed',
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            }}
          />
          <SketchPicker
            color={picker.colorPicker}
            onChange={picker.changePicker}
            disableAlpha={true}
          />
        </Box>
      ) : null}
    </Box>
  )
} 

export default Picker
