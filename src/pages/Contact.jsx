import React, { useState } from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import phone from '../assets/phone.png'
import mail from '../assets/mail.png'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh

    // form submission logic (FormSubmit)
    const form = e.target;
    form.submit(); // submitting the form
  };

  return (
    <section className="pb-[140px]">
      <Container>
        <div className="">
          <nav class="flex py-[50px]" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li class="inline-flex items-center">
                <Link to="/">Home</Link>
              </li>
              <li>
                <div class="flex items-center">
                  <span className="">/</span>
                </div>
              </li>
              <li>
                <div class="flex items-center">
                  <h3 className="">Cantact</h3>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="flex justify-between">
          <div className="w-[30%]">
            <div className="flex items-center gap-[16px]">
              <img src={phone} alt="" />
              <h3 className="font-poppins font-medium text-[16px] text-[#000000]">Call To Us</h3>
            </div>
            <h3 className="font-poppins font-normal text-[14px] text-[#000000] pt-[24px]">We are available 24/7, 7 days a week.</h3>
            <h3 className="font-poppins font-normal text-[14px] text-[#000000] pt-[16px] pb-[32px]">Phone: +8801611112222</h3>
            <div className="border-t-[1px] border-[#b4adad]">
              <div className="pt-[32px] flex items-center gap-[16px]">
                <img src={mail} alt="" />
                <h3 className="font-poppins font-medium text-[16px] text-[#000000]">Write To US</h3>
              </div>
              <h3 className="font-poppins font-normal text-[14px] text-[#000000] pt-[24px] w-[250px]">Fill out our form and we will contact you within 24 hours.</h3>
              <h3 className="font-poppins font-normal text-[14px] text-[#000000] pt-[16px]">Emails: customer@exclusive.com</h3>
              <h3 className="font-poppins font-normal text-[14px] text-[#000000] pt-[16px]">Emails: support@exclusive.com</h3>
            </div>
          </div>

          <div className="w-[60%]">
            {/* <div className="flex gap-[16px]">
              <input type="text" className='w-[235px] h-[50px] border-[1px] border-[#999090] pl-[15px]' placeholder='Your Name *'/>
              <input type="text" className='w-[235px] h-[50px] border-[1px] border-[#999090] pl-[15px]' placeholder='Your Email *'/>
              <input type="text" className='w-[235px] h-[50px] border-[1px] border-[#999090] pl-[15px]' placeholder='Your Phone *'/>
            </div> */}
            <form
              action="https://formsubmit.co/29a657c0ed92acc863c8076feb8ad84c"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-4 w-full max-w-md bg-white p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-gray-700">Contact Us</h2>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              ></textarea>

              {/* Hidden Fields for FormSubmit */}
              <input type="hidden" name="_next" value="https://exclusive-rho-sable.vercel.app" />
              <input type="hidden" name="_subject" value="New message from contact form" />

              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact