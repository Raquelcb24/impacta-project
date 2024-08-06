import waiter from '../images/impactacom_Waiter_preparing_a_cocktail_from_which_a_lot_of_smok_39cc6042-3b3e-4264-91e6-3ddbb9f91152.png'

function Section_passion() {
  return (
    <section className="section_passion flex items-center justify-center relative h-60 overflow-visible mt-20">
        <div className='relative flex items-center justify-center w-full'>
            <h2 className="text-white font-bold text-center text-lg absolute w-full z-10 whitespace-nowrap tracking-wide md:tracking-widest xl:text-4xl">VENDEMOS HUMO CON MUCHA PASIÓN</h2>
            <img className='w-60 relative rounded-md z-0 transform translate-y-18 md:w-72 lg:w-72 xl:w-96' src={waiter} alt="waiter picture" />
        </div>
    </section>
  )
}

export default Section_passion