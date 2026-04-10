import React from 'react'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl">
        <div className="flex justify-between items-center px-12 py-4 max-w-screen-2xl mx-auto">
          <Link to="/">
            <img 
              alt="San Gabriel Logo" 
              className="h-12 w-auto object-contain" 
              src="/Logo_sangabriel_d_original.png" 
            />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link className="text-teal-700 dark:text-teal-300 font-bold border-teal-600 transition-colors duration-300" to="/">Inicio</Link>
            <Link className="text-slate-600 dark:text-slate-400 font-medium hover:text-teal-600 transition-colors duration-300" to="/planes">Planes y Servicios</Link>
            <a className="text-slate-600 dark:text-slate-400 font-medium hover:text-teal-600 transition-colors duration-300" href="#">Obituaries</a>
            <a className="text-slate-600 dark:text-slate-400 font-medium hover:text-teal-600 transition-colors duration-300" href="#">About Us</a>
            <a className="text-slate-600 dark:text-slate-400 font-medium hover:text-teal-600 transition-colors duration-300" href="#">Contact</a>
          </div>
          <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-full text-xs font-medium tracking-widest uppercase hover:opacity-90 transition-opacity">
            Emergency Call
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            data-alt="Serene landscape of a quiet lake at dawn with mist rising from the water and soft blue and white morning light" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4IkBBys2Ix-ws1zvUXfK_FYw_7IXgMepz1xPLRn9YKl3AqV59ZpPWt5SNQfA6dUddW6bp0XGRujZHeyvTZlwKughAcZ_t5XRMIRCoIGACPojYikm8ZD7_cfKAJI3GBT_2UHtCUeVPNPhQWhi5Sp3ffsOp8Q5HUfm7vSS0wKWgQ2UrQPdPxQLpgTutjLA9XHl9yEsQGVhS1qrCvg_EE2OZb-7HCgOCnHw4RNew2VjUjVIoI-Yt3HBJxR9g6rAAb_9zfnh0QmZHCgYH" 
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl text-primary font-serif leading-tight">
              Funeraria San Gabriel: <br/>
              <span className="italic">Acompañamiento con Dignidad y Respeto</span>
            </h1>
            <p className="text-xl text-tertiary font-body max-w-md leading-relaxed">
              Estamos a su disposición las 24 horas del día en Santiago de Chile, brindando consuelo y guía profesional en los momentos más difíciles.
            </p>
            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-full font-label text-xs font-bold tracking-widest uppercase shadow-lg shadow-primary/20 hover:scale-105 transition-transform" href="tel:+56931798537">
                Necesito ayuda ahora
              </a>
              <a className="inline-flex items-center justify-center px-8 py-4 bg-surface-container-lowest text-primary rounded-full font-label text-xs font-bold tracking-widest uppercase border border-outline-variant/20 hover:bg-surface-container transition-colors" href="#">
                Planificar con anticipación
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-12">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl text-on-surface font-serif">Nuestros Servicios</h2>
            <div className="w-16 h-1 bg-primary-container mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group p-8 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-all duration-500 flex flex-col h-full">
              <div className="mb-6 text-primary">
                <span className="material-symbols-outlined text-4xl">church</span>
              </div>
              <h3 className="text-2xl font-serif text-on-surface mb-4 group-hover:text-primary transition-colors">Servicio Tradicional</h3>
              <p className="text-tertiary leading-relaxed mb-8 flex-grow">Ceremonias personalizadas que honran la vida y el legado de sus seres queridos con la máxima solemnidad.</p>
              <Link className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-4 transition-all" to="/planes">
                Saber más <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            {/* Card 2 */}
            <div className="group p-8 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-all duration-500 flex flex-col h-full">
              <div className="mb-6 text-primary">
                <span className="material-symbols-outlined text-4xl">local_fire_department</span>
              </div>
              <h3 className="text-2xl font-serif text-on-surface mb-4 group-hover:text-primary transition-colors">Cremación</h3>
              <p className="text-tertiary leading-relaxed mb-8 flex-grow">Un proceso respetuoso y privado, con diversas opciones de ánforas y memoriales modernos.</p>
              <Link className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-4 transition-all" to="/planes">
                Saber más <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            {/* Card 3 */}
            <div className="group p-8 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-all duration-500 flex flex-col h-full">
              <div className="mb-6 text-primary">
                <span className="material-symbols-outlined text-4xl">public</span>
              </div>
              <h3 className="text-2xl font-serif text-on-surface mb-4 group-hover:text-primary transition-colors">Traslados Internacionales</h3>
              <p className="text-tertiary leading-relaxed mb-8 flex-grow">Gestión completa de trámites y logística para traslados hacia y desde cualquier lugar del mundo.</p>
              <Link className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-4 transition-all" to="/planes">
                Saber más <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img 
              className="rounded-xl shadow-2xl z-10 relative" 
              data-alt="Interior of a modern and peaceful reception area with soft lighting, minimalist wooden furniture and white walls" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMMjQXGFRR1EQOsbIQ5ViYDPiBtgYcq2rkHwuWYuYdpYDGSwLdlDG0uTXkfkM3agZcyn_D5P8PQDJ03VRv8neLuJ2IUj7Fmk6LihFFz9ndgTdDI1PmzqmM6Ndp2oF5sCM2w4Bj-c1KDRNFTm5GkBbE2-vHSgt6krLy0N8bY7q3sfzrH2bxJDEGHX4kNaAKFMao6Vna_GIgwBM56ft5mIrFAhMg_jo1MznkTH94hS2NJvICNDsfotFmzJ2rb3PdfmzosCtOhh4XQc0t" 
            />
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl"></div>
          </div>
          <div className="space-y-6">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs">Nuestra Trayectoria</span>
            <h2 className="text-4xl text-on-surface font-serif leading-tight">Compromiso con las familias de Santiago</h2>
            <p className="text-lg text-tertiary leading-relaxed font-body italic">
              "En Funeraria San Gabriel, entendemos que cada vida es única. Nuestro propósito es brindar un espacio de paz y una gestión impecable, permitiendo que las familias se enfoquen en lo más importante: la despedida y el recuerdo."
            </p>
            <p className="text-tertiary leading-relaxed">
              Ubicados en el corazón de Santiago, nos hemos consolidado como un referente de confianza, ética y profesionalismo en servicios funerarios integrales.
            </p>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-4xl text-on-surface font-serif">Encuéntrenos</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <div>
                  <p className="font-bold text-on-surface">Dirección</p>
                  <p className="text-tertiary">Santiago Centro, Chile</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary">mail</span>
                <div>
                  <p className="font-bold text-on-surface">Correo Electrónico</p>
                  <a className="text-tertiary hover:text-primary transition-colors" href="mailto:fsangabriel@gmail.com">fsangabriel@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary">schedule</span>
                <div>
                  <p className="font-bold text-on-surface">Horario de Atención</p>
                  <p className="text-tertiary">Disponibles las 24 horas, los 365 días del año</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 h-[450px] rounded-xl overflow-hidden shadow-xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.9628523333345!2d-70.65733422343379!3d-33.502343600173056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662db2160f56565%3A0x9075722eb212f6e2!2sFuneraria%20S.%20Gabriel!5e0!3m2!1ses-419!2sve!4v1775829628212!5m2!1ses-419!2sve" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Funeraria San Gabriel"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-16 px-12 bg-slate-100 dark:bg-slate-900">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div className="space-y-4">
            <img 
              alt="San Gabriel Logo" 
              className="h-16 w-auto object-contain mb-4" 
              src="/Logo_sangabriel_d_original.png" 
            />
            <p className="text-slate-500 dark:text-slate-400 text-sm italic">Servicios con alma y respeto.</p>
          </div>
          <div>
            <h4 className="text-teal-900 dark:text-teal-500 font-serif mb-4">Contacto</h4>
            <ul className="space-y-2 text-slate-500 dark:text-slate-400 text-sm">
              <li>Email: fsangabriel@gmail.com</li>
              <li>Location: Santiago, Chile</li>
            </ul>
          </div>
          <div>
            <h4 className="text-teal-900 dark:text-teal-500 font-serif mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-500 dark:text-slate-400 text-sm">
              <li><a className="hover:text-teal-600 transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-teal-600 transition-colors" href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-slate-500 dark:text-slate-400 text-xs">
              © 2024 Funeraria San Gabriel. Santiago, Chile.
            </p>
          </div>
        </div>
      </footer>

      {/* BottomNavBar (FAB Style) */}
      <div className="fixed bottom-8 right-8 z-50">
        <a className="flex items-center gap-3 bg-[#f8f9fa]/80 backdrop-blur-xl p-4 rounded-full shadow-2xl group hover:scale-105 transition-transform cursor-pointer border border-outline-variant/20" href="https://wa.me/56931798537" target="_blank" rel="noreferrer">
          <div className="flex items-center justify-center bg-secondary text-white rounded-full p-4">
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>chat</span>
          </div>
          <div className="pr-4 hidden md:block">
            <span className="font-body text-[10px] uppercase tracking-wider text-secondary block font-bold">Chatea con nosotros</span>
            <span className="text-xs text-on-surface">En línea ahora</span>
          </div>
        </a>
      </div>
    </div>
  )
}

export default App
