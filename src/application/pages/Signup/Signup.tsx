import React from 'react'
import SingupForm from 'domain/user/components/SignupForm';
import NavbarMenu from 'domain/user/components/NavbarMenu';

export default function Signup() {

  return (
    <>
    <NavbarMenu />
    <div className="d-flex align-items-center justify-content-center" style={{ paddingTop: "50px" }}>
      <SingupForm />
    </div>
    </>
  )
}
