import { Formik } from 'formik'
import * as yup from 'yup'

import { Button, TextField, Box, CircularProgress } from '@mui/material'

import * as S from './styles'

import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline'

import Picker from '../Picker'

const validationSchema = yup.object().shape({
  website: yup.string().required('Required field').url('Invalid/Incomplete link'),
})

const Card = ({ isImage, onSubmit, loading }) => (
  <>
    <S.Image src={isImage.image ? isImage.image : '/qrcodecreator.png'} alt="QrCode image" />

    <Formik
      initialValues={{
        website: '',
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, errors, handleChange, handleSubmit }) => (
        <S.Form onSubmit={handleSubmit}>
          <TextField
            size="small"
            fullWidth
            label="Insert the link"
            variant="filled"
            placeholder="https://github.com/devgustavomacedo"
            onChange={handleChange}
            name="website"
            value={values.website}
            error={!!errors.website}
            helperText={errors.website}
          />

          <Picker title={'Color'} />

          <Picker title={'Background'} />

          <Box
            sx={{
              display: 'flex',
              gap: '0.5em',
              alignItems: 'center',
              margin: 0,

              '@media (min-width: 1900px)': {
                gap: '1.5em',
              },
            }}
          >
            <Box sx={{ m: 1, position: 'relative', margin: 0 }}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={loading}
                sx={{
                  '@media (max-width: 568px)': {
                    fontSize: '0.8rem',
                  },
                }}
              >
                {loading ? 'Wait...' : 'Create'}
              </Button>

              {loading && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: 'text.secondary',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                  }}
                />
              )}
            </Box>

            {isImage.download && (
              <a href={isImage.download} download={`${isImage.link}.png`}>
                <DownloadForOfflineIcon
                  fontSize="large"
                  color="primary"
                  sx={{
                    '@media (min-width: 1900px)': {
                      height: '1.3em',
                      width: '1.3em',
                    },
                  }}
                />
              </a>
            )}
          </Box>
        </S.Form>
      )}
    </Formik>
  </>
)

export default Card
