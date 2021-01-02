import React, { ReactElement } from 'react'
import './layout.scss';

export default function LayoutDefault(props: {children: ReactElement}) {
  return (
    <div className="content-app">
      <header>

      </header>
      <main>
        {props.children}
      </main>
      <footer>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#f56b03" fill-opacity="1" d="M0,64L48,69.3C96,75,192,85,288,117.3C384,149,480,203,576,234.7C672,267,768,277,864,266.7C960,256,1056,224,1152,202.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
      </footer>
    </div>
  )
}
