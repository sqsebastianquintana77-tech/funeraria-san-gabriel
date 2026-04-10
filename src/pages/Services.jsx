import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#f8f9fa]/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-outline-variant/10">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-4">
            <img alt="San Gabriel Logo" className="h-10 w-auto" src="/Logo_sangabriel_d_original.png"/>
            <span className="text-xl font-serif tracking-tight text-[#00696e] dark:text-[#00a1a9]">San Gabriel</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 font-['Noto_Serif'] text-[#191c1d] dark:text-slate-100">
            <Link to="/" className="text-[#5f5e5e] dark:text-slate-400 hover:text-[#00696e] transition-colors duration-300">Inicio</Link>
            <span className="text-[#00696e] dark:text-[#00a1a9] border-b-2 border-[#00696e] pb-1 transition-colors duration-300 cursor-default">Planes</span>
            <a className="text-[#5f5e5e] dark:text-slate-400 hover:text-[#00696e] transition-colors duration-300" href="#">Pre-Necesidad</a>
            <a className="text-[#5f5e5e] dark:text-slate-400 hover:text-[#00696e] transition-colors duration-300" href="#">Obituarios</a>
            <a className="text-[#5f5e5e] dark:text-slate-400 hover:text-[#00696e] transition-colors duration-300" href="#">Nosotros</a>
            <a className="text-[#5f5e5e] dark:text-slate-400 hover:text-[#00696e] transition-colors duration-300" href="#">Contacto</a>
          </div>
          <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-label text-xs tracking-widest uppercase hover:opacity-90 transition-all active:scale-95">
            Ayuda Inmediata
          </button>
        </div>
      </nav>
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="px-8 py-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 pr-0 lg:pr-12">
              <h1 className="font-headline text-5xl md:text-6xl text-on-surface leading-tight mb-6">
                Honrando la Vida con <br/><span className="text-primary italic">Gracia y Dignidad</span>
              </h1>
              <p className="text-tertiary text-lg max-w-xl leading-relaxed mb-8">
                Ofrecemos servicios funerarios integrales diseñados para honrar el legado único de sus seres queridos. Un espacio de paz para la reflexión y el recuerdo.
              </p>
              <div className="flex gap-4">
                <div className="h-1 w-24 bg-primary-container rounded-full self-center"></div>
                <span className="font-label text-sm uppercase tracking-widest text-secondary font-semibold">Nuestros Planes Exclusivos</span>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img className="w-full h-full object-cover" data-alt="Interior of a modern, peaceful memorial chapel" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn-7cL3aM_p1Vy7pVzR7YaFYUapQ5spqS-6_Kb1fUhXV84aIQ7yamYWsfn_xI8n6PyzTImmA5EGiSMF0xX98VkHG7bbFRd8QaqjD-roBr-ELgaLCC6fMJ2Av3rev_MmjpzsMi2lVw5HXJ0FXTURjVf8zMNzB36Y4C8tDfDE7YNtu5pv3I12BZX-66P947GNa-Rj0HQ9QvyDqVNyyb4Y2GU-E2k8CLf1V5XyMcKs0mkpJ0lUBiVqWKpnAkm6DdX6FrWQ1e7iTB6_oHW"/>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-8 rounded-2xl shadow-xl max-w-xs border border-outline-variant/15">
                <p className="italic text-on-surface-variant font-headline text-lg">"En los momentos de silencio, encontramos la fuerza para honrar su memoria."</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Plans Grid */}
        <section className="bg-surface-container-low py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center lg:text-left">
              <h2 className="font-headline text-4xl text-on-surface mb-4">Planes de Servicio</h2>
              <p className="text-tertiary max-w-2xl">Seleccione el plan que mejor refleje los deseos de su ser querido y brinde consuelo a su familia.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Plan 1: Tradicional A */}
              <div className="bg-surface-container-lowest rounded-2xl overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md transition-all group border border-outline-variant/20">
                <div className="h-56 overflow-hidden">
                  <img alt="Tradicional A Urn and Casket" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/tradicional_a.png"/>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-headline text-2xl text-on-surface mb-1">Tradicional A</h3>
                  <p className="text-primary font-bold text-xl mb-6">$1.250.000</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-lg">check</span>Urna de madera noble</li>
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-lg">check</span>Trámites legales básicos</li>
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-lg">check</span>Sala de velación 24h</li>
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-lg">check</span>Carroza fúnebre</li>
                  </ul>
                  <a className="w-full bg-primary py-3 rounded-full text-white font-label text-xs text-center uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all" href="https://wa.me/56931798537" target="_blank" rel="noreferrer">
                    Consultar vía WhatsApp
                  </a>
                </div>
              </div>
              
              {/* Plan 2: Tradicional B */}
              <div className="bg-surface-container-lowest rounded-2xl overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md transition-all group border border-outline-variant/20">
                <div className="h-56 overflow-hidden">
                  <img alt="Tradicional B Urn and Casket" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/tradicional_b.png"/>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-headline text-2xl text-on-surface mb-1">Tradicional B</h3>
                  <p className="text-primary font-bold text-xl mb-6">$1.330.000</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-lg">check</span>Urna madera acabado superior</li>
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-lg">check</span>Trámites y coordinación</li>
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-lg">check</span>Capilla ardiente</li>
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-lg">check</span>Libro de condolencias</li>
                  </ul>
                  <a className="w-full bg-primary py-3 rounded-full text-white font-label text-xs text-center uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all" href="https://wa.me/56931798537" target="_blank" rel="noreferrer">
                    Consultar vía WhatsApp
                  </a>
                </div>
              </div>
              
              {/* Plan 3: Estándar A */}
              <div className="bg-surface-container-lowest rounded-2xl overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md transition-all group border border-outline-variant/20">
                <div className="h-56 overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/estandar_a.png"/>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-headline text-2xl text-on-surface mb-1">Estándar A</h3>
                  <p className="text-primary font-bold text-xl mb-6">$1.740.000</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-lg">check</span>Urna con tallado artesanal</li>
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-lg">check</span>Arreglo floral premium</li>
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-lg">check</span>Asesoría integral</li>
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-lg">check</span>Transporte de acompañamiento</li>
                  </ul>
                  <a className="w-full bg-primary py-3 rounded-full text-white font-label text-xs text-center uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all" href="https://wa.me/56931798537" target="_blank" rel="noreferrer">
                    Consultar vía WhatsApp
                  </a>
                </div>
              </div>
              
              {/* Plan 4: Estándar B */}
              <div className="bg-surface-container-lowest rounded-2xl overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md transition-all group border border-outline-variant/20">
                <div className="h-56 overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/estandar_b.png"/>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-headline text-2xl text-on-surface mb-1">Estándar B</h3>
                  <p className="text-primary font-bold text-xl mb-6">$1.640.000</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-lg">check</span>Urna diseño sobrio y elegante</li>
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-lg">check</span>Preparación del ser querido</li>
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-lg">check</span>Tarjetas de agradecimiento</li>
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-lg">check</span>Servicio de cafetería</li>
                  </ul>
                  <a className="w-full bg-primary py-3 rounded-full text-white font-label text-xs text-center uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all" href="https://wa.me/56931798537" target="_blank" rel="noreferrer">
                    Consultar vía WhatsApp
                  </a>
                </div>
              </div>
              
              {/* Plan 5: Selecto A */}
              <div className="bg-surface-container-lowest rounded-2xl overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md transition-all group border border-outline-variant/20">
                <div className="h-56 overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/selecto_a.png"/>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-headline text-2xl text-on-surface mb-1">Selecto A</h3>
                  <p className="text-primary font-bold text-xl mb-6">$2.200.000</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-lg">check</span>Urna madera premium barnizada</li>
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-lg">check</span>Interior acolchado de lujo</li>
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-lg">check</span>Homenaje personalizado</li>
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-lg">check</span>Acompañamiento musical</li>
                  </ul>
                  <a className="w-full bg-primary py-3 rounded-full text-white font-label text-xs text-center uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all" href="https://wa.me/56931798537" target="_blank" rel="noreferrer">
                    Consultar vía WhatsApp
                  </a>
                </div>
              </div>
              
              {/* Plan 6: Selecto B */}
              <div className="bg-surface-container-lowest rounded-2xl overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md transition-all group border border-outline-variant/20">
                <div className="h-56 overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/selecto_b.png"/>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-headline text-2xl text-on-surface mb-1">Selecto B</h3>
                  <p className="text-primary font-bold text-xl mb-6">$2.200.000</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-lg">check</span>Urna con herrajes reforzados</li>
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-lg">check</span>Memorial digital</li>
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-lg">check</span>Asistencia legal completa</li>
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-lg">check</span>Coronas florales selectas</li>
                  </ul>
                  <a className="w-full bg-primary py-3 rounded-full text-white font-label text-xs text-center uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all" href="https://wa.me/56931798537" target="_blank" rel="noreferrer">
                    Consultar vía WhatsApp
                  </a>
                </div>
              </div>
              
              {/* Plan 7: Superior A */}
              <div className="bg-surface-container-lowest rounded-2xl overflow-hidden flex flex-col h-full shadow-lg border border-primary/10 relative scale-[1.02] z-10">
                <div className="absolute top-4 right-4 bg-secondary text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">Recomendado</div>
                <div className="h-64 overflow-hidden">
                  <img className="w-full h-full object-cover" src="/superior_a.png"/>
                </div>
                <div className="p-8 flex flex-col flex-grow bg-white">
                  <h3 className="font-headline text-2xl text-on-surface mb-1">Superior A</h3>
                  <p className="text-primary font-bold text-2xl mb-6">$2.950.000</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant font-medium"><span className="material-symbols-outlined text-secondary text-lg">verified</span>Urna de exportación madera fina</li>
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant font-medium"><span className="material-symbols-outlined text-secondary text-lg">verified</span>Servicio de protocolo completo</li>
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant font-medium"><span className="material-symbols-outlined text-secondary text-lg">verified</span>Coro o violinista en capilla</li>
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant font-medium"><span className="material-symbols-outlined text-secondary text-lg">verified</span>Vehículo de acompañamiento VIP</li>
                  </ul>
                  <a className="w-full bg-primary py-4 rounded-full text-white font-label text-xs text-center uppercase tracking-widest hover:shadow-lg active:scale-95 transition-all" href="https://wa.me/56931798537" target="_blank" rel="noreferrer">
                    Consultar vía WhatsApp
                  </a>
                </div>
              </div>
              
              {/* Plan 8: Superior B */}
              <div className="bg-surface-container-lowest rounded-2xl overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md transition-all group border border-outline-variant/20">
                <div className="h-56 overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/superior_b.png"/>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-headline text-2xl text-on-surface mb-1">Superior B</h3>
                  <p className="text-primary font-bold text-xl mb-6">$3.540.000</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-lg">check</span>Urna de madera noble barniz alto brillo</li>
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-lg">check</span>Servicio de limusina para familia</li>
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-lg">check</span>Asistencia en duelo psicológica</li>
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-lg">check</span>Catering premium durante velorio</li>
                  </ul>
                  <a className="w-full bg-primary py-3 rounded-full text-white font-label text-xs text-center uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all" href="https://wa.me/56931798537" target="_blank" rel="noreferrer">
                    Consultar vía WhatsApp
                  </a>
                </div>
              </div>
              
              {/* Plan 9: Superior C */}
              <div className="bg-surface-container-lowest rounded-2xl overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md transition-all group border border-outline-variant/20">
                <div className="h-56 overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/superior_c.png"/>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-headline text-2xl text-on-surface mb-1">Superior C</h3>
                  <p className="text-primary font-bold text-xl mb-6">$3.540.000</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-lg">check</span>Máxima distinción en diseño de urna</li>
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-lg">check</span>Coordinación con cementerio parque</li>
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-lg">check</span>Recordatorios grabados en cristal</li>
                    <li className="flex items-start gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-lg">check</span>Gestión integral de exequias</li>
                  </ul>
                  <a className="w-full bg-primary py-3 rounded-full text-white font-label text-xs text-center uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all" href="https://wa.me/56931798537" target="_blank" rel="noreferrer">
                    Consultar vía WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Bento Comparison Section */}
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <h2 className="font-headline text-3xl text-center mb-16">La Diferencia San Gabriel</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
            <div className="md:col-span-2 bg-surface-container rounded-3xl overflow-hidden relative group">
              <img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" data-alt="Calm water surface with soft ripples" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9XnIZTiQzLVtnC_tAxKZs5jEiudwY7EcH2FNNOQe-hDeQ1TWBxjVDsrzEvZ3jn2_uBUdaZzXcnSys6rdntOC7PJ1YKx-i1k_e9Uffeb5iN-SJLxarn4jslC3mDGXFXZGAfJMUe3ccXeieoYssLFD9wViJu-WnrDuM8Z6DVph1btwAzcXyI8Il3fW_jLGTYCEodxsvWTcfAzqnaX4HaxtoZXwY8IG-kq9siJsDuZQWW_dZ5b8Bbuhp8a6_A-jafSNRWbck_mN6iGZN"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-12">
                <h3 className="text-white font-headline text-3xl mb-4">Guía Compasiva</h3>
                <p className="text-white/80 max-w-md">Nuestros asesores están capacitados para brindar apoyo logístico y empatía emocional en todo momento.</p>
              </div>
            </div>
            
            <div className="bg-primary p-12 rounded-3xl flex flex-col justify-center text-white shadow-xl">
              <span className="material-symbols-outlined text-5xl mb-6">workspace_premium</span>
              <h3 className="font-headline text-2xl mb-4">Calidad Certificada</h3>
              <p className="text-on-primary/80 mb-8">Superamos los estándares internacionales en cuidado funerario y gestión digna de ritos finales.</p>
              <a className="font-label text-xs uppercase tracking-widest border-b border-white/30 pb-2 w-fit hover:border-white transition-all" href="#">Saber Más</a>
            </div>
            
            <div className="bg-surface-container-high p-12 rounded-3xl flex flex-col justify-center border border-outline-variant/10">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6">event_available</span>
              <h4 className="font-headline text-xl mb-2">Planificación Anticipada</h4>
              <p className="text-tertiary text-sm">Congele precios actuales y evite a su familia la carga de decisiones difíciles en momentos complejos.</p>
            </div>
            
            <div className="md:col-span-2 bg-surface-container-low rounded-3xl p-12 flex items-center gap-12 border border-outline-variant/10">
              <div className="flex-1">
                <h4 className="font-headline text-2xl mb-4">Precios Transparentes</h4>
                <p className="text-tertiary text-sm">Sin cargos ocultos. Cada detalle del servicio está itemizado para que pueda decidir con total tranquilidad.</p>
              </div>
              <div className="hidden sm:block h-24 w-24 rounded-full border-4 border-primary-container border-t-transparent animate-spin-[20s_linear_infinite]"></div>
            </div>
          </div>
        </section>
      </main>
      
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
      
      {/* Footer */}
      <footer className="w-full pt-16 pb-8 bg-[#f3f4f5] dark:bg-slate-900 border-t border-outline-variant/10">
        <div className="flex flex-col items-center gap-8 px-8 w-full">
          <div className="flex flex-col items-center text-center max-w-2xl">
            <img alt="San Gabriel Footer Logo" className="h-12 w-auto mb-4 opacity-80" src="/Logo_sangabriel_d_original.png"/>
            <span className="font-serif text-lg text-[#00696e]">Funeraria San Gabriel</span>
            <p className="mt-4 font-body text-[#5f5e5e] dark:text-slate-400">Sirviendo a nuestra comunidad con integridad desde 1978. Dedicados a brindar paz y tranquilidad en momentos de pérdida.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-[#5f5e5e] text-sm">
            <a className="hover:text-[#00696e] transition-all" href="#">Política de Privacidad</a>
            <a className="hover:text-[#00696e] transition-all" href="#">Términos de Servicio</a>
            <a className="hover:text-[#00696e] transition-all" href="#">Cobertura de Servicio</a>
            <a className="hover:text-[#00696e] transition-all" href="#">Contáctenos</a>
          </div>
          
          <div className="w-full max-w-7xl h-px bg-outline-variant/20 mt-8"></div>
          
          <p className="font-body text-[#5f5e5e] dark:text-slate-400 text-sm">
            © 2024 Funeraria San Gabriel. El Santuario Etéreo. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
