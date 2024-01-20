const ColorSection = ({ children, title, id }) => {
  return (
    <section data-aos="fade-down" id={id} className="my-20 bg-gradient-to-b from-accent to-accent shadow-xl rounded-none lg:rounded-2xl">
        <div className='p-10'>
            <h1 className='text-4xl sm:text-5xl tracking-tight text-primary leading-tight font-semibold my-3'> {title} </h1>
            {children}
        </div>
    </section>
  )
}

export default ColorSection