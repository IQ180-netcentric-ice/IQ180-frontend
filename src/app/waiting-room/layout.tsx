export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div style={{border: '1px solid white', borderRadius: '16px'}}>
        {children}
      </div>
    )
}