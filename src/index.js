import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import App from './components/App'


axios.get('/api/contests')
  .then(resp => {
    return {
      initialMarkup:  ReactDOM.render(
        <App initialContests={resp.data.contests} />,
        document.getElementById('root')
      ),
      initialData: resp.data
    }
  })
.catch(console.error)