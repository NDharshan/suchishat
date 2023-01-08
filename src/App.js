// // sri
// import { useEffect, useState } from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Header from './components/Header'
// // import Home from './views/Home'
// // import Project from './views/Project'
// // import { isWallectConnected } from './services/blockchain'
// import { ToastContainer } from 'react-toastify'

// const App = () => {
//   return (
//     <div className="min-h-screen relative">
//       <Header />
//     </div>
//   )
// }

// export default App


// portions of code are adapted from HackerNoon and we thank them for making
// the code for the foundation of our project available to us

import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './views/Home'
import Project from './views/Project'
import { isWallectConnected } from './services/blockchain'
import { ToastContainer } from 'react-toastify'

const App = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(async () => {
    await isWallectConnected()
    console.log('Blockchain loaded')
    setLoaded(true)
  }, [])

  return (
    <div className="min-h-screen relative bg-gradient-to-t from-orange-100 to-sky-100 bg-cover " >
      {/* bg-gradient-to-t from-orange-100 to-sky-100 */}
      <Header />
      {loaded ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<Project />} />
        </Routes>
      ) : null}

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default App
