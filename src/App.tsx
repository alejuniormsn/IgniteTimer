import { Button } from './components/Button'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defaultTheme'
import { GlobalStyle } from './styles/global'
import { Router } from './components/Router'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Ignite Timer</h1>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button variant="warning" />

      <BrowserRouter>
        <Router />
      </BrowserRouter>
      
      <GlobalStyle />
    </ThemeProvider>
  )
}
