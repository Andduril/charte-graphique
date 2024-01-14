import { Box, Button, CssBaseline, Divider, PaletteMode, Stack, TextField, ThemeProvider, Typography, createTheme, Checkbox, Select, MenuItem } from "@mui/material"
import { useState } from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CloseIcon from '@mui/icons-material/Close';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import BarChartIcon from '@mui/icons-material/BarChart';
import EuroIcon from '@mui/icons-material/Euro';
import SavingsIcon from '@mui/icons-material/Savings';
import SearchIcon from '@mui/icons-material/Search';

function App() {
  const [mode, setMode] = useState<PaletteMode>('light')

  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#7DAB6C',
      },
      secondary: {
        main: '#D9D9D9'
      },
      success: {
        main: '#336D63'
      },
      error: {
        main: '#B12929'
      }
    }
  })

  const themeColors = [
    { text: 'primary', theme: theme.palette.primary.main },
    { text: 'secondary', theme: theme.palette.secondary.main },
    { text: 'error', theme: theme.palette.error.main },
    { text: 'warning', theme: theme.palette.warning.main },
    { text: 'info', theme: theme.palette.info.main },
    { text: 'success', theme: theme.palette.success.main },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>Button</Button> */}
      <Stack sx={{ minHeight: '100vh' }} justifyContent={'center'} alignItems={'center'}>
        <Stack direction={'row'}>
          <Stack direction={'column'} divider={<Divider />} spacing={3}>
            <Stack spacing={1}>
              <Typography variant="h5">Boutons :</Typography>
              <Stack direction={'row'} spacing={1}>
                <Button color={'primary'} variant={'contained'}>Contained</Button>
                <Button color={'primary'} variant={'outlined'}>Outlined</Button>
                <Button color={'primary'} variant={'text'}>Text</Button>
              </Stack>
              <Stack direction={'row'} spacing={1}>
                <Button color={'secondary'} variant={'contained'}>Contained</Button>
                <Button color={'secondary'} variant={'outlined'}>Outlined</Button>
                <Button color={'secondary'} variant={'text'}>Text</Button>
              </Stack>
              <Stack direction={'row'} spacing={1}>
                <Button color={'success'} variant={'contained'}>Contained</Button>
                <Button color={'success'} variant={'outlined'}>Outlined</Button>
                <Button color={'success'} variant={'text'}>Text</Button>
              </Stack>
            </Stack>
            <Stack spacing={1}>
              <TextField
                label="Nom"
                variant="outlined"
                fullWidth
              // Autres propriétés TextField selon vos besoins
              />

              <TextField
                label="Mot de passe"
                type="password"
                variant="outlined"
                fullWidth
                value={'amogusssssss'}
                focused
              // Autres propriétés TextField selon vos besoins
              />

              <Stack direction={'row'}>
                <Checkbox checked />
                <Checkbox />
              </Stack>
              <Select
                labelId="dropdown-label"
                id="dropdown"
                label="Choisissez une option"
              >
                <MenuItem value="option1">Option 1</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
                <MenuItem value="option3">Option 3</MenuItem>
              </Select>
            </Stack>
          </Stack>
          <Stack m={10} direction={'column'} divider={<Divider />} spacing={3}>
            <Stack direction={'column'} spacing={1}>
              <Typography variant="h5">Police: Roboto</Typography>
              <Typography>AZERTYUIOPQSDFGHJKLMWXCVBNazertyuiopqsdfghjklmwxcvbn</Typography>
              <Typography variant="h5">Police: Roboto bold</Typography>
              <Typography fontWeight={'bold'}>AZERTYUIOPQSDFGHJKLMWXCVBNazertyuiopqsdfghjklmwxcvbn</Typography>
            </Stack>
            <Stack spacing={1}>
              <Typography variant="h5">Icons :</Typography>
              <Stack direction={'row'} spacing={2}>
                <SettingsIcon onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} />
                <PersonIcon />
                <MenuIcon />
                <AccessAlarmIcon />
                <CloseIcon />
                <Brightness4Icon />
                <BarChartIcon />
                <EuroIcon />
                <SavingsIcon />
                <SearchIcon />
              </Stack>
            </Stack>
            <Stack direction={'row'} spacing={1}>
              {themeColors.map((color) => {
                return (
                  <Stack key={color.text} alignItems={'center'}>
                    <Box sx={{ width: 50, height: 50, bgcolor: color.theme }} />
                    <Typography>{color.text}</Typography>
                    <Typography>{color.theme}</Typography>
                  </Stack>
                )
              })}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </ThemeProvider>
  )
}

export default App
