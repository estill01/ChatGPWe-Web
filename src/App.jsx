import './App.css';
import backgroundImage from './assets/banner.png';
import logoImage from './assets/logo.png';
import twitterLogo from './assets/twitter.png';

export default function App() {
  return (
   
    <div className="bg-gray-800 overflow-y-hidden">

      <div className='top-0 left-0 w-full fixed drop-shadow-xl bg-slate-900 flex flex-col z-10'>
        <div className='flex-1 flex flex-row items-center'>
          <div className="w-full h-17 px-2 flex flex-row items-center bg-slate-900 p-1 flex-1"> 
            <img 
            src={logoImage} 
            className='h-16 h-16 sm:w-24 sm:h-24' 
            alt='ChatGPWe! Share Your ChatGPT Threads with friends' 
            />
            <div className='flex flex-col'>
              <div className='text-white text-xl sm:text-5xl flex-1 ml-[-0.05em]'>
                <span className='font-black'>ChatGP</span>We
              </div>
              <div className='text-gray-400 text-xs sm:text-sm font-light'>
                Group-Chat Plugin For ChatGPT
              </div>
            </div>
          </div>
          <div className='flex flex-row space-x-4 mr-2 sm:mr-6'>
            <a href="https://twitter.com/chatgpwe" target="_blank">
              <img src={twitterLogo} className='h-8 w-8 sm:h-12 sm:w-12'/>
            </a>
          </div>
        </div>
        <div className="w-full h-[0.2em] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"/> 
      </div>

      <div className='h-content w-full mt-32 sm:mt-40'>
      </div>
      
        <div class="flex flex-col h-full w-full items-center justify-center bg-gray-800 back z-1">
          <img src={logoImage} className='h-60 w-60 min-h-60 min-w-60 sm:h-80 sm:w-80 drop-shadow'/>
          <div class="text-2xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white">ChatGPT With <span className='gradient-text'>Friends!</span></div>
          <div className='font-extralight text-lg md:text-2xl lg:text-4xl text-gray-300 mt-2'>
            Share & Explore Chats With Friends
          </div>

          <div className='mt-10 flex flex-col items-center'>
            <a href="https://chat.openai.com/" target="_blank">
              <div className='text-md sm:text-lg md:text-xl lg:text-2xl font-medium text-white hover:bg-purple-600 rounded-xl p-6 hover:border-purple-500 border-4 cursor-pointer active:bg-purple-700 active:border-purple-600 bg-purple-700 border-purple-600 select-none'>
                Give Me <span className='font-bold'>ChatGP</span><span className='font-light'>We</span>!
              </div>
            </a>
            <div className='mt-2 font-extralight text-gray-400 text-sm sm:text-md md:text-lg lg:text-xl'>
              Install the <span className='font-semibold'>ChatGP</span><span className='font-normal'>We</span> Plugin to join the party!
            </div>
          </div>
        </div>

      
      
    </div>
  )
}
