import React from 'react'
import { assets } from '../assets/assets'

const RatingWorkshop = () => {

  return (
    <div className='mt-3'>
      {/* Review Popup */}
      <div className=' justify-self-end  mx-[15%]'>
        {/* The button to open modal */}
        <label htmlFor='my_modal_1' className='btn btn-primary px-8 rounded-full text-white font-light shadow-lg'>Review Here!</label>

        {/* Put this part before </body> tag */}
        <input type='checkbox' id='my_modal_1' className='modal-toggle' />
        <div className='modal' role='dialog'>
          <div className='modal-box'>
            <div className='flex flex-col gap-4 px-3 py-2 items-center'>
              <div className='rating'>
                <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' />
                <input
                  type='radio'
                  name='rating-2'
                  className='mask mask-star-2 bg-orange-400'
                  defaultChecked />
                <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' />
                <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' />
                <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' />
              </div>

              <textarea className='textarea textarea-bordered w-full' placeholder='Bio'></textarea>
            </div>

            <div className='modal-action'>
              <label htmlFor='my_modal_1' className='btn'>Confirm!</label>
            </div>
          </div>
        </div>
      </div>

      {/* My Review */}
      <div className='px-5 py-8 justify-self-end mx-[10%] gap-2'>
        <div className='chat chat-end px-5 py-3'>
          <div className='chat-bubble chat-bubble-primary'>You underestimate my power!</div>
        </div>
        <div className='avatar'>
            <h2 className='px-3'>User Name</h2>
          <div className='w-12 rounded-full'>
            <img src={assets.profile_pic} />
          </div>
        </div>
      </div>

      {/* Review Area */}
      <div>

      </div>
    </div>
  )
}

export default RatingWorkshop
