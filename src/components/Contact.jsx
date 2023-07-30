import Icons from '../utils/Icons'
import { useForm } from '@formcarry/react';

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

  const urls = [
    {
        name: 'email',
        url: 'mailto:mailto:bilalsheikh2500@gmail.com'
    },
    {
        name: 'whatsapp',
        url: 'https://wa.me/923324187624?text=Hi%20Bilal%2C%20I%20want%20to%20hire%20you%20for%20my%20project'
    },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/billypentester/'
    }
  ]

  return (
    <section data-aos="zoom-in-down" id="contact" className="my-20 bg-gradient-to-b from-blue-200 to-blue-100 shadow-xl rounded-none lg:rounded-2xl">
        <div className='p-10'>
          <h1 className='text-4xl sm:text-5xl tracking-tight text-gray-800 leading-tight font-semibold my-5'> Get in touch </h1>
          <div className="flex flex-1 flex-col md:flex-row gap-10">
            <div className="w-full md:w-2/5">
                <p className='text-lg font-medium mb-5'> 
                  Let's have a chat and I'll help your next idea comes to the real world. 
                </p>
                <p className='text-lg font-medium my-5'>
                  Simple friendly talk in never a bad idea :)
                </p>
                <div className="flex items-center space-x-5 my-8">
                  {
                      urls.map((url) => (
                          <button key={url.name} className='bg-gray-100 hover:bg-blue-500 text-blue-500 hover:text-gray-100 p-3 rounded-full shadow-md shadow-blue-300 transition duration-500 ease-in-out'>
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
                    <input id="name" type="text" name="name" placeholder="Name*" className="input w-full rounded-full shadow-lg" />
                    <input id="email" type="email" name="Email" placeholder="Email*" className="input w-full rounded-full shadow-lg" />
                  </div>
                  <textarea id="message" name="Message" className="textarea w-full rounded-2xl shadow-lg resize-none" placeholder="Message*" rows="5"></textarea>
                  <button type="submit" className="btn btn-wide btn-primary ms-auto">
                      <span className="material-icons-outlined">send</span>
                  </button>
                </div>
              </form>
            </div>
            <dialog id="my_modal_2" className="modal">
              <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg"> Thank you for contacting me! </h3>
                <p className="py-4"> I'll get back to you as soon as possible. </p>
                <button className="btn btn-primary " onClick={() => window.my_modal_2.close()}>Close</button>
              </form>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
    </section>
  )
}

export default Contact
