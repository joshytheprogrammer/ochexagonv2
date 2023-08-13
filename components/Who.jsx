import Image from 'next/image'
import chemicals from '@assets/chemicals.jpg'

const Who = () => {
  return (
    <div className='lg:px-24 md:px-16 px-8 py-4 flex flex-col lg:flex-row justify-between items-center '>
        <div className='lg:w-2/4 mb-8 lg:mb-0 mr-8'>
            <Image 
            src={chemicals}
            alt='chemicals'
            className='w-full h-[260px] sm:h-[400px] lg:w-[600px] lg:h-[450px]'
            />
        </div>

        <div className='lg:w-2/4'>
            <h2 className='font sm:text-5xl text-4xl font-semibold mb-3 lg:mb-8'>Who we are</h2>
            <p className='font text-lg '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus exercitationem quos quidem ut iusto corrupti placeat deserunt beatae totam, consequuntur voluptatum. Fuga maiores unde perspiciatis aliquid quod soluta atque nesciunt pariatur modi distinctio laboriosam earum necessitatibus, neque hic nulla iure!
            </p>
        </div>
      </div>
  )
}

export default Who