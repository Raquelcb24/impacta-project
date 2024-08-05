import { useState } from "react"


function SectionForm() {

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
  
    try {
      const response = await fetch('http://localhost:4000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      const result = await response.json();
      if (result.success) {
        alert('Mensaje enviado con éxito');
      } else {
        alert('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el mensaje');
    }
  };
  

  return (
    <section className="form text-white border pt-10">
      <form onSubmit={handleSubmit}>
        <div className="form_grid xl:ml-8 xl:mr-8 2xl:m-20">
          <section className="from_message flex flex-col items-center gap-2 sm:ml-6 sm:mr-6 md:w-96 md:mt-4 md:items-start md:ml-6 lg:ml-10 lg:mr-10 2xl:ml-20 2xl:w-full ">
            <h2 className="font-bold text-center w-full">ENVIANOS TU MENSAJE</h2>
            <div className="flex flex-col gap-2 md:flex-row w-full 2xl:h-12">
              <input className="form_input rounded w-full md:w-1/2"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Nombre" />
              <input className="form_input rounded w-full md:w-1/2"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email" />
            </div>
            <div className="flex flex-col gap-2 md:flex-row w-full 2xl:h-12">
              <input className="form_input rounded w-full md:w-1/2"
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Teléfono" />
              <input className="form_input rounded w-full md:w-1/2"
                type="text"
                id="planet"
                name="planet"
                value={formData.planet}
                onChange={handleChange}
                placeholder="Planeta de nacimiento" />
            </div>
            <div className="flex flex-col w-full ">
              <textarea className="form_input rounded h-48 w-full"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Mensaje" />
            </div>
            <p className="text-xs m-6 xl:text-center w-full">
              Sus datos serán tratados por IMPACTA para la atención de las consultas o solicitudes de información realizadas. Puede ejercer sus derechos conforme a lo dispuesto en la Política de Privacidad. Más información aquí.
            </p>
          </section>

          <section className="form_radio flex flex-col items-center md:items-end md:mr-6 text-sm md:text-lg 2xl:text-2xl ">
            <h2 className="2xl:justify-start">SELECCIONA SOLO <span className="font-bold">UN RESULTADO</span></h2>
            <div className="md:flex md:flex-col md:items-start">
              <div className="mt-4">
                <input className="w-10"
                  type="radio"
                  id="happy"
                  name="radio"
                  value="happy"
                  checked={formData.radio === 'happy'}
                  onChange={handleChange} />
                <label className="form_label border p-1 rounded-md" htmlFor="happy">Quiero ser feliz</label>
              </div>
              <div className="mt-4">
                <input className="w-10"
                  type="radio"
                  id="rich"
                  name="radio"
                  value="rich"
                  checked={formData.radio === 'rich'}
                  onChange={handleChange} />
                <label className="form_label border p-1 rounded" htmlFor="rich">Quiero ser rico</label>
              </div>
              <div className="mt-4">
                <input className="w-10"
                  type="radio"
                  id="airplane"
                  name="radio"
                  value="airplane"
                  checked={formData.radio === 'airplane'}
                  onChange={handleChange} />
                <label className="form_label border p-1 rounded " htmlFor="airplane">Quiero un avión</label>
              </div>
              <div className="mt-4">
                <input className="w-10"
                  type="radio"
                  id="sleep"
                  name="radio"
                  value="sleep"
                  checked={formData.radio === 'sleep'}
                  onChange={handleChange} />
                <label className="form_label border p-1 rounded" htmlFor="sleep">Quiero dormir todo el día</label>
              </div>
            </div>
          </section>
        </div>
        <div className="md:flex md:flex-col md:items-end lg:flex-row lg:items-center lg:justify-end lg:mb-8">
          <div className="md:pr-6">
            <input className="m-4"
              type="checkbox"
              id="privacy"
              name="privacy"
              checked={formData.privacy}
              onChange={handleChange}
              required />
            <label className="text-xs lg:text-xl 2xl:text-2xl" htmlFor="privacy">He leído y acepto el <span className="font-bold">aviso legal </span>
              y la <span className="font-bold">política de privacidad</span></label>
          </div>
          <button className="form_button" type="submit">ENVIAR MENSAJE</button>
        </div>
      </form>
    </section>
  );
}


export default SectionForm