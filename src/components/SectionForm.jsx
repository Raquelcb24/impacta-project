import { useState } from "react"


function SectionForm() {

  //variable de estado para conectar el formulario con la base de datos
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefono: '',
    planet: '',
    message: '',
    radio: '',
    privacy: false
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  console.log(formData)

  const handleSubmit = async (event) => {
    event.preventDefault();
   
  };
  

  return (
    <section className="form text-white border pt-10 ">
      <form className=" xl:m-24 2xl:m-36 3xl:m-60 " onSubmit={handleSubmit}>
        <div className="form_grid md:space-x-3">
          <section className="from_message flex flex-col gap-2 sm:ml-6 sm:mr-6 md:w-96 md:mt-4 md:ml-10 md:items-start 2xl:w-full ">
            <h2 className="text-center w-full md:text-left 2xl:text-2xl"><span className="font-bold">ENVIANOS TU</span> MENSAJE</h2>
            <div className="flex flex-col gap-2 md:flex-row w-full 2xl:h-12">
            <input className="form_input rounded-lg w-full md:w-1/2"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Nombre" />
            <input className="form_input rounded-lg w-full md:w-1/2"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email" />
        </div>
        <div className="flex flex-col gap-2 md:flex-row w-full 2xl:h-12">
          <input className="form_input rounded-lg w-full md:w-1/2"
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="Teléfono" />
          <input className="form_input rounded-lg w-full md:w-1/2"
            type="text"
            id="planet"
            name="planet"
            value={formData.planet}
            onChange={handleChange}
            placeholder="Planeta de nacimiento" />
        </div>
        <div className="flex flex-col w-full ">
          <textarea className="form_input rounded-lg pt-2 h-48 w-full"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Mensaje" />
        </div>
        <p className="text-xs xl:text-center w-full 2xl:text-lg">
          Sus datos serán tratados por IMPACTA para la atención de las consultas o solicitudes de información realizadas. Puede ejercer sus derechos conforme a lo dispuesto en la Política de Privacidad. Más información aquí.
        </p>
          </section>

      <section className="form_radio mt-6 flex flex-col items-center  md:mr-6 text-sm md:text-lg 2xl:text-2xl ">
        <h2 className="text-center w-full md:text-center 2xl:text-2xl">SELECCIONA SOLO <span className="font-bold">UN RESULTADO</span></h2>
        <div className="md:flex md:flex-col md:items-center">
          <div className="mt-4">
            <div className="radio_container">
              <input className="form_radio"
                type="radio"
                id="happy"
                name="radio"
                value="happy"
                checked={formData.radio === 'happy'}
                onChange={handleChange} />
              <label className="form_label" htmlFor="happy">Quiero ser feliz</label>
            </div>
          </div>
          <div className="mt-4">
            <div className="radio_container">
              <input className="form_radio"
                type="radio"
                id="rich"
                name="radio"
                value="rich"
                checked={formData.radio === 'rich'}
                onChange={handleChange} />
              <label className="form_label" htmlFor="rich">Quiero ser rico</label>
            </div>
          </div>
          <div className="mt-4">
            <div className="radio_container">
              <input className="form_radio"
                type="radio"
                id="airplane"
                name="radio"
                value="airplane"
                checked={formData.radio === 'airplane'}
                onChange={handleChange} />
              <label className="form_label" htmlFor="airplane">Quiero un avión</label>
            </div>
          </div>
          <div className="mt-4">
            <div className="radio_container">
              <input className="form_radio"
                type="radio"
                id="sleep"
                name="radio"
                value="sleep"
                checked={formData.radio === 'sleep'}
                onChange={handleChange} />
              <label className="form_label" htmlFor="sleep">Quiero dormir todo el día</label>
            </div>
          </div>
        </div>
      </section>
        </div>
        <div className="m-8 md:flex md:flex-col md:items-end lg:flex-row lg:items-center lg:justify-end lg:mb-8">
        <div className="m-8 md:pr-6">
        <div className="check_container">
            <input className="form_check"
                type="checkbox"
                id="privacy"
                name="privacy"
                checked={formData.privacy}
                onChange={handleChange}
                required />
            <label className="form_check_label text-xs lg:text-xl 2xl:text-2xl" htmlFor="privacy">
                He leído y acepto el <span className="font-bold">aviso legal</span> y la <span className="font-bold">política de privacidad</span>
            </label>
        </div>
        </div>
          <button className="form_button" type="submit">ENVIAR MENSAJE</button>
        </div>
      </form>
    </section>
  );
}


export default SectionForm