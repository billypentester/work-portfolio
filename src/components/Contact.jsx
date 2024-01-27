import Icons from '../utils/Icons'
import { useForm } from '@formcarry/react';
import { urls } from '../data/config';
import ColorSection from "../layouts/ColorSection"

const Contact = () => {

  const {state, submit} = useForm({id: 'tarEgBws0S'});
 
  if (state.submitted) {
    window.my_modal_2.showModal()
    setTimeout(() => {
      document.getElementById('name').value = ''
      document.getElementById('email').value = ''
      document.getElementById('message').value = ''
    }, 1000)
  }

  const capitalized = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <ColorSection id="contact" title="Get in touch">
      <div className="flex flex-1 flex-col md:flex-row gap-10 my-10">
        <div className="w-full md:w-2/5">
            <p className='text-lg text-primary font-medium mb-5'> 
              Let's have a chat and I'll help your next idea comes to the real world. 
            </p>
            <p className='text-lg text-primary font-medium my-5'>
              Simple friendly talk in never a bad idea :)
            </p>
            <div className="flex items-center space-x-5 my-8">
              {
                  urls.map((url) => (
                      <button name={capitalized(url.name)} data-tip={capitalized(url.name)} key={url.name} className='tooltip tooltip-bottom bg-neutral hover:bg-secondary text-secondary hover:text-neutral p-3 rounded-full shadow-md shadow-secondary transition duration-500 ease-in-out'>
                          <a href={url.url} target="_blank">
                              <Icons type={url.name} paint="h-6 w-6"/>
                          </a>
                      </button>
                  ))
              }
            </div>
        </div>
        <div className="w-full md:w-3/5">
          <form onSubmit={submit}>
            <div className="flex flex-col space-y-5">
              <div className="flex sm:space-x-5 space-y-5 sm:space-y-0 flex-col sm:flex-row">
                <input id="name" type="text" name="name" placeholder="Name*" className="input w-full rounded-lg shadow-lg" />
                <input id="email" type="email" name="Email" placeholder="Email*" className="input w-full rounded-lg shadow-lg" />
              </div>
              <textarea id="message" name="Message" className="textarea w-full rounded-lg shadow-lg resize-none" placeholder="Message*" rows="5"></textarea>
              <button type="submit" className="btn btn-block lg:btn-wide btn-secondary ms-auto">
                  <span className="material-icons-outlined text-white capitalize">send message</span>
              </button>
            </div>
          </form>
        </div>
        <dialog id="my_modal_2" className="modal">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg"> Thank you for contacting me! </h3>
            <p className="py-4"> I'll get back to you as soon as possible. </p>
            <button className="btn btn-secondary" onClick={() => window.my_modal_2.close()}>Close</button>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </ColorSection>  
  )
}

export default Contact
