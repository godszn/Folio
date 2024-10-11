'use client'
import React, {useState} from 'react'
import NavbarComponent from '../../Components/NavbarComponent'
import MainComponent from '../../Components/MainComponent'
import ExperienceComponent from '../../Components/ExperienceComponent'
import ProComponent from '../../Components/ProComponent'
import ContactComponent from '../../Components/ContactComponent'
import DropdownComponent from '../../Components/DropdownComponent'
const page = () => {
  const [isDarkMode , setDarkMode] = useState<boolean>(false);
  const toggleDarkmode = () => {
    setDarkMode(!isDarkMode)
  }
  const [isDropdown , setDropdown] = useState<boolean>(false);
  const dropdown = () => {
    setDropdown(!isDropdown)
  }
  return (
    <main className={`main ${isDarkMode ? 'light-theme' : ''}` }>
     <NavbarComponent toggleDarkmode={toggleDarkmode} isDarkMode= {isDarkMode} menuClick = {dropdown} />
     <MainComponent isDarkMode = {isDarkMode}/>
     <ExperienceComponent/>
     <ProComponent/>
     <ContactComponent isDarkMode = {isDarkMode}/>
     {isDropdown && <DropdownComponent menuClick={dropdown} isDropdown={isDropdown}/>}
    </main>
  )
}

export default page
