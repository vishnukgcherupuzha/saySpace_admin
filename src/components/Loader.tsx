import { imageConstants } from '../../public/images'

const Loader = () => {
  return (
    <div className='w-screen h-screen bg-primary'>
        <div className="flex justify-center items-center h-screen">
            <div className="animate-pulse rounded-full h-20 w-20">
                <img src={imageConstants.LOGO} alt="Logo" className="h-20 w-20" />
            </div>
        </div>
    </div>
  )
}

export default Loader