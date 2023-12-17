import React from 'react'

const PageTitle = ({title}) => {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
    <h1 className="page-title" style={{ margin: "40px auto" }}>
      {title}
    </h1>
  </div>
  )
}

export default PageTitle