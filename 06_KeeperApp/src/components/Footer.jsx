const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer>
      <p>Copyright © {currentYear}. All rights reserved.</p>
    </footer>
  )
}

export default Footer
