


const Theme = ({ darkMode, setDarkMode }) => {


  const onClickChangeTheme = () => {
    setDarkMode(!darkMode)
  }


  return (
    <div className="theme-wrapper" onClick={onClickChangeTheme}>
      <div className={darkMode ? "theme theme-light" : "theme theme-dark"}></div>
      <i className="fas fa-sun"></i>
      <i className="fas fa-moon"></i>
    </div>
  )
}

export default Theme