const getThemeColor = () => {
    const theme = typeof window !== "undefined" && window.__theme
  
    if (theme === "light") return "#fff"
    if (theme === "dark") return "#d8545c"
  }
  
  export default getThemeColor