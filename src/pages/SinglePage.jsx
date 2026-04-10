import React, { useState, useEffect } from 'react';

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
  </svg>
);

const COMMON_SERVICES = [
  "Servicio funerario base",
  "Carroza Panoramica",
  "Capilla ardiente de luces",
  "Van de ida y vuelta",
  "Inscripcion en el Registro Civil",
  "Libro de condolencias.",
  "Tarjetero",
  "Asesoria legal, primera consulta gratis"
];

const PLANS = [
  { id: 1, name: "Tradicional A", price: "1.250.000", image: "/tradicional_a.png", features: [...COMMON_SERVICES] },
  { id: 2, name: "Tradicional B", price: "1.330.000", image: "/tradicional_b.png", features: [...COMMON_SERVICES] },
  { id: 3, name: "Estándar A", price: "1.740.000", image: "/estandar_a.png", features: [...COMMON_SERVICES, "Arreglo Floral (1)", "Asesoria Sicologica"] },
  { id: 4, name: "Estándar B", price: "1.640.000", image: "/estandar_b.png", features: [...COMMON_SERVICES, "Arreglo Floral (1)", "Asesoria Sicologica"] },
  { id: 5, name: "Selecto A", price: "2.200.000", image: "/selecto_a.png", features: [...COMMON_SERVICES, "Arreglo Floral (2)", "Cafeteria Full", "Asesoria Sicologica"] },
  { id: 6, name: "Selecto B", price: "2.200.000", image: "/selecto_b.png", features: [...COMMON_SERVICES, "Arreglo Floral (2)", "Cafeteria Full", "Asesoria Sicologica"] },
  { id: 7, name: "Superior A", price: "2.950.000", image: "/superior_a.png", recommended: true, features: [...COMMON_SERVICES, "Arreglo Floral (2)", "Cafeteria Premiun", "Asesoria Sicologica"] },
  { id: 8, name: "Superior B", price: "3.540.000", image: "/superior_b.png", features: [...COMMON_SERVICES, "Arreglo Floral (2)", "Cafeteria Premiun", "Asesoria Sicologica"] },
  { id: 9, name: "Superior C", price: "3.540.000", image: "/superior_c.png", features: [...COMMON_SERVICES, "Arreglo Floral (2)", "Cafeteria Premiun", "Asesoria Sicologica"] }
];

export default function SinglePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [mapActive, setMapActive] = useState(false);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedPlan) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedPlan]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-primary shadow-lg border-b border-white/10">
        <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img alt="San Gabriel Logo" className="h-10 md:h-12 w-auto object-contain brightness-0 invert" src="/Logo_sangabriel_d_original.png" />
            <span className="text-lg md:text-xl font-serif tracking-tight text-white font-bold hidden sm:block">Funeraria San Gabriel</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10 font-serif">
            <button onClick={() => scrollToSection('hero')} className="text-white font-bold hover:text-white/80 transition-colors tracking-tight">Inicio</button>
            <button onClick={() => scrollToSection('planes')} className="text-white/90 font-bold hover:text-white transition-colors tracking-tight">Planes</button>
            <button onClick={() => scrollToSection('nosotros')} className="text-white/90 font-bold hover:text-white transition-colors tracking-tight">Nosotros</button>
            <button onClick={() => scrollToSection('ubicacion')} className="text-white/90 font-bold hover:text-white transition-colors tracking-tight">Ubicación</button>
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:+56931798537" className="hidden lg:block bg-white text-primary px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-slate-50 transition-all shadow-md">
              Ayuda 24/7
            </a>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              <span className="material-symbols-outlined notranslate text-3xl">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-outline-variant/10 py-6 px-12 flex flex-col gap-6 shadow-2xl animate-fade-in font-serif">
            <button onClick={() => scrollToSection('hero')} className="text-xl text-left text-primary font-bold">Inicio</button>
            <button onClick={() => scrollToSection('planes')} className="text-xl text-left text-slate-600">Planes y Servicios</button>
            <button onClick={() => scrollToSection('nosotros')} className="text-xl text-left text-slate-600">Nuestra Trayectoria</button>
            <button onClick={() => scrollToSection('ubicacion')} className="text-xl text-left text-slate-600">Donde Estamos</button>
            <a href="tel:+56931798537" className="bg-primary text-on-primary text-center py-4 rounded-xl font-bold uppercase tracking-widest text-sm">
              Emergencia Directa
            </a>
          </div>
        )}
      </nav>

      {/* Quick Access Bar */}
      <section className="fixed top-[72px] md:top-[80px] w-full z-40 bg-white border-b border-primary/5 shadow-md shadow-black/5">
        <div className="max-w-7xl mx-auto grid grid-cols-5 divide-x divide-primary/5">
          <a href="tel:+56931798537" className="flex flex-col items-center py-2 md:py-4 hover:bg-red-50 transition-colors group">
            <span className="material-symbols-outlined notranslate text-red-600 mb-0.5 text-xl md:text-2xl group-hover:scale-110 transition-transform">emergency</span>
            <span className="text-[7px] md:text-xs font-bold uppercase tracking-widest text-red-700 text-center px-1">Ayuda Ahora</span>
          </a>
          <button onClick={() => scrollToSection('planes')} className="flex flex-col items-center py-2 md:py-4 hover:bg-slate-50 transition-colors group">
            <span className="material-symbols-outlined notranslate text-primary mb-0.5 text-xl md:text-2xl group-hover:scale-110 transition-transform">church</span>
            <span className="text-[7px] md:text-xs font-bold uppercase tracking-widest text-slate-800">Funeraria</span>
          </button>
          <button onClick={() => scrollToSection('planes')} className="flex flex-col items-center py-2 md:py-4 hover:bg-slate-50 transition-colors group">
            <span className="material-symbols-outlined notranslate text-primary mb-0.5 text-xl md:text-2xl group-hover:scale-110 transition-transform">meeting_room</span>
            <span className="text-[7px] md:text-xs font-bold uppercase tracking-widest text-slate-800">Velatorio</span>
          </button>
          <button onClick={() => scrollToSection('planes')} className="flex flex-col items-center py-2 md:py-4 hover:bg-slate-50 transition-colors group">
            <span className="material-symbols-outlined notranslate text-primary mb-0.5 text-xl md:text-2xl group-hover:scale-110 transition-transform">local_fire_department</span>
            <span className="text-[7px] md:text-xs font-bold uppercase tracking-widest text-slate-800">Cremación</span>
          </button>
          <button onClick={() => scrollToSection('ubicacion')} className="flex flex-col items-center py-2 md:py-4 hover:bg-slate-50 transition-colors group">
            <span className="material-symbols-outlined notranslate text-primary mb-0.5 text-xl md:text-2xl group-hover:scale-110 transition-transform">grass</span>
            <span className="text-[7px] md:text-xs font-bold uppercase tracking-widest text-slate-800">Sepultura</span>
          </button>
        </div>
      </section>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex items-center pt-[140px] md:pt-[160px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            alt="Paisaje sereno"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4IkBBys2Ix-ws1zvUXfK_FYw_7IXgMepz1xPLRn9YKl3AqV59ZpPWt5SNQfA6dUddW6bp0XGRujZHeyvTZlwKughAcZ_t5XRMIRCoIGACPojYikm8ZD7_cfKAJI3GBT_2UHtCUeVPNPhQWhi5Sp3ffsOp8Q5HUfm7vSS0wKWgQ2UrQPdPxQLpgTutjLA9XHl9yEsQGVhS1qrCvg_EE2OZb-7HCgOCnHw4RNew2VjUjVIoI-Yt3HBJxR9g6rAAb_9zfnh0QmZHCgYH" 
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6 md:space-y-8">
            <img 
              alt="San Gabriel Logo" 
              className="h-20 md:h-28 w-auto object-contain mb-4 animate-fade-in" 
              src="/Logo_sangabriel_d_original.png" 
            />
            <h1 className="text-4xl md:text-7xl text-primary font-serif leading-tight drop-shadow-sm">
              Funeraria San Gabriel: <br/>
              <span className="italic text-primary-container">Dignidad y Respeto</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-700 font-body max-w-lg leading-relaxed font-medium">
              Acompañamiento profesional las 24 horas en Región Metropolitana, brindando consuelo en los momentos más difíciles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button onClick={() => scrollToSection('planes')} className="inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary rounded-full font-bold tracking-widest uppercase shadow-lg hover:scale-105 transition-transform text-xs">
                Ver Planes de Servicio
              </button>
              <a href="tel:+56931798537" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-full font-bold tracking-widest uppercase border border-outline-variant/20 hover:bg-slate-50 transition-colors text-xs">
                Necesito ayuda ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Planes Section */}
      <section id="planes" className="bg-slate-50 py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl text-on-surface font-serif uppercase tracking-tight">Catálogo de Servicios</h2>
            <div className="w-16 h-1 bg-primary/30 mx-auto rounded-full"></div>
            <p className="text-tertiary max-w-2xl mx-auto pt-4 text-sm md:text-base">Seleccione el plan que mejor refleje los deseos de su ser querido. Toca cualquier tarjeta para ver el detalle oficial.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PLANS.map((plan) => (
              <div 
                key={plan.id}
                onClick={() => setSelectedPlan(plan)}
                className={`bg-white rounded-[2rem] overflow-hidden flex flex-col h-full shadow-sm hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-outline-variant/10 ${plan.recommended ? 'scale-[1.02] ring-2 ring-primary/10' : ''} relative`}
              >
                {plan.recommended && (
                  <div className="absolute top-6 left-6 bg-secondary text-white text-[10px] font-bold uppercase px-4 py-1.5 rounded-full shadow-sm z-10">Recomendado</div>
                )}
                <div className="h-64 overflow-hidden relative">
                  <img alt={plan.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={plan.image}/>
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-serif text-2xl text-on-surface mb-2">{plan.name}</h3>
                  <p className="text-primary font-bold text-2xl mb-6">${plan.price}</p>
                  <ul className="space-y-3 mb-8 flex-grow text-sm text-on-surface-variant font-medium">
                    {plan.features.slice(0, 4).map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="material-symbols-outlined notranslate text-primary/60 text-lg">
                          arrow_forward
                        </span>
                        {f}
                      </li>
                    ))}
                    <li className="text-primary/40 text-xs italic">+ Ver todos los servicios en el detalle</li>
                  </ul>
                  <div className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-[10px] text-center group-hover:bg-primary transition-colors shadow-lg">
                    Explorar Plan
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Modal (Urna Highlight) */}
      {selectedPlan && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-fade-in-blur px-4">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl" onClick={() => setSelectedPlan(null)}></div>
          
          <div className="relative bg-white w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-[2.5rem] shadow-2xl animate-scale-up border border-white/20">
            {/* Close button */}
            <button 
              onClick={() => setSelectedPlan(null)}
              className="absolute top-6 right-6 z-[110] bg-white p-3 rounded-full shadow-2xl text-slate-900 hover:bg-red-50 hover:text-red-500 transition-all flex items-center justify-center border border-slate-100"
            >
              <span className="material-symbols-outlined notranslate text-2xl">close</span>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 h-full">
              {/* Image highlight section */}
              <div className="lg:col-span-5 h-[350px] lg:h-full bg-slate-50 relative overflow-hidden group">
                <img src={selectedPlan.image} alt={selectedPlan.name} className="w-full h-full object-cover animate-fade-in" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                    <span className="bg-primary/90 px-4 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest mb-3 inline-block">Vista Detallada</span>
                    <h3 className="text-3xl font-serif">{selectedPlan.name}</h3>
                </div>
              </div>

              {/* Info section */}
              <div className="lg:col-span-7 p-8 md:p-14 space-y-10 flex flex-col justify-center">
                <div className="space-y-2">
                  <h4 className="text-secondary font-bold uppercase tracking-[.25em] text-[10px]">Detalle del Plan</h4>
                  <p className="text-4xl md:text-5xl font-bold text-primary font-serif">${selectedPlan.price}</p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-slate-400">
                    <div className="h-px flex-1 bg-slate-100"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest">Incluye los siguientes servicios</span>
                    <div className="h-px flex-1 bg-slate-100"></div>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                    {selectedPlan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-4 text-on-surface-variant group/item">
                        <span className="material-symbols-outlined notranslate text-primary/70 text-xl flex-shrink-0 group-hover/item:scale-110 transition-transform">verified_user</span>
                        <span className="text-sm font-medium text-slate-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 grid gap-4">
                  <a 
                    href={`https://wa.me/56931798537?text=Hola,%20quisiera%20más%20información%20sobre%20el%20plan%20${selectedPlan.name}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center gap-4 bg-primary text-white py-6 rounded-3xl font-bold uppercase tracking-[.2em] text-xs hover:bg-slate-900 transition-all shadow-xl shadow-primary/10"
                  >
                    <WhatsAppIcon />
                    Contratar Ahora
                  </a>
                  <div className="flex justify-center gap-8 pt-2">
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                        <span className="material-symbols-outlined notranslate text-sm">support_agent</span>
                        Asistencia 24h
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                        <span className="material-symbols-outlined notranslate text-sm">workspace_premium</span>
                        Calidad SPA
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Nosotros Section */}
      <section id="nosotros" className="py-24 bg-slate-50 overflow-hidden px-6 md:px-12 transition-all">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img 
              className="rounded-xl shadow-2xl z-10 relative w-full h-auto" 
              alt="Interior San Gabriel"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMMjQXGFRR1EQOsbIQ5ViYDPiBtgYcq2rkHwuWYuYdpYDGSwLdlDG0uTXkfkM3agZcyn_D5P8PQDJ03VRv8neLuJ2IUj7Fmk6LihFFz9ndgTdDI1PmzqmM6Ndp2oF5sCM2w4Bj-c1KDRNFTm5GkBbE2-vHSgt6krLy0N8bY7q3sfzrH2bxJDEGHX4kNaAKFMao6Vna_GIgwBM56ft5mIrFAhMg_jo1MznkTH94hS2NJvICNDsfotFmzJ2rb3PdfmzosCtOhh4XQc0t" 
            />
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl hidden md:block"></div>
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

      {/* Diferencia Section (Bento) */}
      <section className="py-24 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl text-center mb-16 uppercase tracking-tight">La Diferencia San Gabriel</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-slate-200 rounded-3xl overflow-hidden relative group h-[300px]">
              <img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9XnIZTiQzLVtnC_tAxKZs5jEiudwY7EcH2FNNOQe-hDeQ1TWBxjVDsrzEvZ3jn2_uBUdaZzXcnSys6rdntOC7PJ1YKx-i1k_e9Uffeb5iN-SJLxarn4jslC3mDGXFXZGAfJMUe3ccXeieoYssLFD9wViJu-WnrDuM8Z6DVph1btwAzcXyI8Il3fW_jLGTYCEodxsvWTcfAzqnaX4HaxtoZXwY8IG-kq9siJsDuZQWW_dZ5b8Bbuhp8a6_A-jafSNRWbck_mN6iGZN" alt="Serenidad" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 md:p-12">
                <h3 className="text-white font-serif text-2xl mb-2">Guía Compasiva</h3>
                <p className="text-white/80 text-sm max-w-md">Apoyo logístico y empatía emocional en todo momento.</p>
              </div>
            </div>
            
            <div className="bg-primary p-10 rounded-3xl flex flex-col justify-center text-white shadow-xl">
              <span className="material-symbols-outlined notranslate text-4xl mb-4">workspace_premium</span>
              <h3 className="font-serif text-xl mb-3">Calidad Certificada</h3>
              <p className="text-white/80 text-sm">Superamos estándares internacionales en cuidado funerario.</p>
            </div>
            
            <div className="bg-white p-10 rounded-3xl flex flex-col justify-center border border-outline-variant/10 shadow-sm">
              <span className="material-symbols-outlined notranslate text-secondary text-3xl mb-4">event_available</span>
              <h4 className="font-serif text-lg mb-2">Planificación Anticipada</h4>
              <p className="text-tertiary text-sm">Congele precios y evite decisiones difíciles a futuro.</p>
            </div>
            
            <div className="md:col-span-2 bg-teal-50 rounded-3xl p-10 flex items-center gap-8 border border-teal-100">
              <div className="flex-1">
                <h4 className="font-serif text-xl mb-2">Precios Transparentes</h4>
                <p className="text-tertiary text-sm">Sin cargos ocultos. Gestión itemizada para su tranquilidad.</p>
              </div>
              <div className="hidden sm:block h-16 w-16 rounded-full border-4 border-teal-200 border-t-primary animate-spin-[10s_linear_infinite]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Ubicacion Section */}
      <section id="ubicacion" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-10">
            <div>
                <h4 className="text-secondary font-bold uppercase tracking-widest text-[10px] mb-2">Canales Oficiales</h4>
                <h2 className="text-3xl md:text-4xl text-on-surface font-serif">Contáctenos 24/7</h2>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/5 p-3 rounded-xl">
                    <span className="material-symbols-outlined notranslate text-primary">location_on</span>
                </div>
                <div>
                  <p className="font-bold text-on-surface uppercase tracking-widest text-[10px]">Dirección Central</p>
                  <p className="text-on-surface-variant text-sm mt-1">Tristán Matta #1111, San Miguel, Región Metropolitana</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/5 p-3 rounded-xl">
                    <span className="material-symbols-outlined notranslate text-primary">phone_iphone</span>
                </div>
                <div>
                  <p className="font-bold text-on-surface uppercase tracking-widest text-[10px]">Urgencias y Consultas</p>
                  <div className="grid gap-1 mt-1">
                      <a href="tel:+56975423704" className="text-primary hover:underline text-sm font-medium">+56 9 7542 3704</a>
                      <a href="tel:+56931798537" className="text-primary hover:underline text-sm font-medium">+56 9 3179 8537</a>
                      <a href="tel:+56997451997" className="text-primary hover:underline text-sm font-medium">+56 9 9745 1997</a>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/5 p-3 rounded-xl">
                    <span className="material-symbols-outlined notranslate text-primary">mail</span>
                </div>
                <div>
                  <p className="font-bold text-on-surface uppercase tracking-widest text-[10px]">Email Corporativo</p>
                  <a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="mailto:fsangabriel2023@gmail.com">fsangabriel2023@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-4">
            <div className="relative h-[350px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border border-outline-variant/10">
              {/* Overlay para móvil: evita abrir Maps sin querer */}
              {!mapActive && (
                <div 
                  onClick={() => setMapActive(true)}
                  className="absolute inset-0 z-10 bg-slate-900/30 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer lg:hidden transition-all"
                >
                  <span className="material-symbols-outlined notranslate text-white text-5xl mb-3 animate-bounce-subtle">touch_app</span>
                  <p className="text-white font-bold text-sm uppercase tracking-widest">Toca para ver el mapa</p>
                  <p className="text-white/60 text-xs mt-1">Interactúa sin salir de la página</p>
                </div>
              )}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.9628523333345!2d-70.65733422343379!3d-33.502343600173056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662db2160f56565%3A0x9075722eb212f6e2!2sFuneraria%20S.%20Gabriel!5e0!3m2!1ses-419!2sve!4v1775829628212!5m2!1ses-419!2sve" 
                width="100%" 
                height="100%" 
                style={{ border: 0, pointerEvents: mapActive ? 'auto' : 'none' }} 
                allowFullScreen="" 
                loading="lazy" 
                title="Mapa"
                className="lg:pointer-events-auto"
              ></iframe>
            </div>
            {/* Botón dedicado: abre Google Maps en nueva pestaña */}
            <a 
              href="https://maps.app.goo.gl/YourLink" 
              target="_blank" 
              rel="noreferrer"
              onClick={(e) => { e.preventDefault(); window.open('https://www.google.com/maps/place/Funeraria+S.+Gabriel/@-33.5023436,-70.6573342,17z', '_blank'); }}
              className="flex items-center justify-center gap-3 bg-primary text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-slate-900 transition-colors shadow-lg lg:hidden"
            >
              <span className="material-symbols-outlined notranslate text-lg">open_in_new</span>
              Abrir en Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full pt-20 pb-10 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center gap-14">
          <div className="max-w-2xl space-y-6">
            <img alt="San Gabriel" className="h-16 w-auto mx-auto brightness-0 invert opacity-90" src="/Logo_sangabriel_d_original.png" />
            <div className="space-y-2">
                <h3 className="font-serif text-2xl text-primary-fixed">Servicios Funerarios San Gabriel SPA</h3>
                <p className="text-slate-500 text-xs font-bold tracking-[.3em]">RUT 77.673.563-9</p>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed italic">"Acompañamos en los momentos más difíciles con calidez y respeto."</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 text-slate-500 text-[10px] uppercase font-bold tracking-[.4em]">
            <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">Inicio</button>
            <button onClick={() => scrollToSection('planes')} className="hover:text-primary transition-colors">Planes</button>
            <button onClick={() => scrollToSection('nosotros')} className="hover:text-primary transition-colors">Nosotros</button>
            <button onClick={() => scrollToSection('ubicacion')} className="hover:text-primary transition-colors">Contacto</button>
          </div>

          <div className="w-full max-w-4xl h-px bg-slate-900"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6 text-slate-600 text-[10px] tracking-widest uppercase font-bold">
            <p>© 2024 San Gabriel. Todos los derechos reservados.</p>
            <a href="https://www.funeraiasangabriel.com" target="_blank" className="hover:text-white transition-colors">www.funeraiasangabriel.com</a>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button (Official Logo + Green) */}
      <a 
        href="https://wa.me/56931798537" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce-subtle flex items-center justify-center"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}
