import React from 'react'

class Footer extends React.Component {
  render() {
    const YEAR = new Date().getFullYear()
    return (
      <footer class="py-8 bg-gray-200 text-center">
        Max RENAUD © {YEAR}
      </footer>
    )
  }
}

export default Footer