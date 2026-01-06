import Navbar from "../ReusableComponents/navbar"

const Header = ({title}: {title: string}) => {
  return (
    <div className='h-[35vh] bg-black py-[32px] px-[165px]'>
      <Navbar/>
      <div className="flex items-center justify-center h-full mt-[-10px]">
        <h2 className="text-white text-center">{title}</h2>
      </div>
    </div>
  )
}

export default Header