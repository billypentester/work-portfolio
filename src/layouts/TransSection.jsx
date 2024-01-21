const TransSection = ({ children, title, id }) => {
  return (
    <section data-aos="fade-down" data-aos-offset="100" data-aos-duration="300" data-aos-delay="300" id={id} className="my-20 mx-10">
      <h1 className='text-4xl sm:text-5xl tracking-tight text-primary leading-tight font-semibold my-3'> {title} </h1>
      {children}
    </section>
  )
}

export default TransSection
