const Layout = ({ children }) => {
  return (
    <div className="space-between absolute top-0 flex min-h-[10vh] w-screen flex-row  bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-red-500">
      {children}
    </div>
  )
}

export default Layout
