import {React,useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import {styles} from '../style'
import {navLinks} from '../constants'
import {logo,menu,close} from '../assets'
const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, settoggle] = useState(true)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed z-20 bg-primary`}>
    <div className={`w-full flex justify-between items-center max-w-7xl mx-auto`}>
        <Link to={`/`} className='flex items-center gap-2' onClick={()=>{
          setActive("")
          window.scrollTo(0,0);
      }}>
        <img src={logo} alt="logo" className='w-9 h-9 object-contain' /> 
        <p className='text-white font-bold text-[18px] cursor-pointer flex'> Marwan  &nbsp;<span className='hidden sm:block '>| Developer</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link)=>(
            <li key={link.id}
              className={`${active==link.title?"text-white": 
              "text-secondary"} hover:text-white text-[18px] cursor-pointer font-medium`}
              onClick={()=>setActive(link.title)}
            >
              
              <a href={`#${link.title}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 items-center justify-end'>
          <img src={toggle? menu : close } alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' 
            onClick={()=>settoggle(!toggle)}
          />
          <div className={`${toggle?'hidden':'flex'} p-6 black-gradient absolute top-20 right-0 mx-0 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className='list-none flex justify-end flex-col items-start gap-4'>
          {navLinks.map((link)=>(
            <li key={link.id}
              className={`${active==link.title?"text-white": 
              "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
              onClick={()=>{
                setActive(link.title) 
                settoggle(!toggle)
              }}
            >
              
              <a href={`#${link.title}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        </div>
        </div>
    </div>
    </nav>
  )
}

export default Navbar