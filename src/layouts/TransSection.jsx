const TransSection = ({ children, title, id }) => {
  return (
    <section data-aos="fade-down" id={id} className="my-20 mx-10">
      <h1 className='text-4xl sm:text-5xl tracking-tight text-primary leading-tight font-semibold my-3'> {title} </h1>
      {children}
    </section>
  )
}

export default TransSection
