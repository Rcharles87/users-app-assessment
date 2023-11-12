import React from 'react'

function Error({error}) {
  return (
    <div>There was an error: {error}
    <br />
    Please contact support.
    </div>
  )
}

export default Error