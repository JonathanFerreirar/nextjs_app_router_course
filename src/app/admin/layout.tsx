import React, { ReactNode } from 'react'

const AdminLayout = ({children}: {children: ReactNode}) => {
  return (
    <>
    <div>{children}</div>
    <h3>Admin layout</h3>
    </>
  )
}

export default AdminLayout