const AuthLayout = ({ children }: {children: React.ReactNode }) => {
  return (
    <div className="h-[100vh] flex flex-items items-center justify-center relative">
        {children}
    </div>
  )
}

export default AuthLayout