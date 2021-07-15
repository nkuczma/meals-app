import React from 'react'
import Week from 'domain/week/Week';
import NavbarMenu from 'domain/user/components/NavbarMenu';
import './MealsPlanner.scss';

export default function MealsPlanner() {
  return (
    <>
      <NavbarMenu />
      <div className="week-container">
        <Week />
      </div>
    </>
   )
}
