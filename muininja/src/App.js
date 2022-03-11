import Create from "./pages/Create";
import Notes from "./pages/Notes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { purple } from "@mui/material/colors";
const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: purple,
  },
  typography: {
    fontFamily: "Dancing",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
