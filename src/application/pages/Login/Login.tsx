import React from 'react'
import LoginForm from 'domain/user/components/LoginForm';
import NavbarMenu from 'domain/user/components/NavbarMenu';

export default function Login() {

  return (
    <>
    <NavbarMenu />
    <div className="d-flex align-items-center justify-content-center" style={{ paddingTop: "50px" }}>
      <LoginForm />
    </div>
    </>
  )
}
