import Link from "next/link"
import { ChevronRight, Linkedin, Search, Users, BarChart2, Globe, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top banner */}
      <div className="bg-[#5e2750] text-white py-2 px-4">
        <div className="container mx-auto">
          <p className="text-sm font-medium">
            En Conecsi priorizamos el escuchar, entender y atender a nuestros clientes.
          </p>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white py-4 px-4 md:px-8 border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-[#5e2750] mr-8 flex items-center">
              <span className="text-3xl font-extrabold">C</span>
              <span className="text-2xl">onecsi</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="#" className="text-gray-700 hover:text-[#5e2750] font-medium transition-colors">
                Inicio
              </Link>
              <Link href="#" className="text-gray-700 hover:text-[#5e2750] font-medium transition-colors">
                Nuestros Servicios
              </Link>
              <Link href="#" className="text-gray-700 hover:text-[#5e2750] font-medium transition-colors">
                Ofertas de trabajo
              </Link>
              <Link href="#" className="text-gray-700 hover:text-[#5e2750] font-medium transition-colors">
                Contacto
              </Link>
            </nav>
          </div>
          <div className="flex space-x-3">
            <button className="bg-[#00b8a9] text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-sm hover:bg-[#009b8f] transition-colors">
              Postulá tu CV
            </button>
            <button className="bg-[#5e2750] text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-sm hover:bg-[#4e2042] transition-colors">
              Encuentra Mayor Talento
            </button>
          </div>
          <button className="md:hidden mt-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#2e1226] via-[#5e2750] to-[#4e2042] text-white py-20 md:py-32">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80')] bg-cover bg-center opacity-10"></div>
            <div className="absolute inset-0 bg-pattern opacity-5"></div>
          </div>
          <div className="container mx-auto relative z-10 px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                FIND <span className="text-[#00b8a9]">YOUR</span> VIBE
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white max-w-2xl">
                Encontrá el trabajo que te impulse o el equipo que llevará tu negocio al siguiente nivel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#00b8a9] text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:bg-[#009b8f] transition-all hover:shadow-xl">
                  Encuentra Mayor Talento
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-all">
                  Conoce más
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-[#f8f5f9]">
          <div className="container mx-auto">
            <div className="flex flex-col items-center mb-16">
              <div className="inline-block px-3 py-1 bg-[#5e2750]/10 text-[#5e2750] rounded-full text-sm font-medium mb-4">
                SERVICIOS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">NUESTROS SERVICIOS</h2>
              <div className="w-20 h-1 bg-[#00b8a9] mb-6"></div>
              <p className="text-gray-600 text-center max-w-2xl">
                Ofrecemos soluciones integrales para conectar el mejor talento con las empresas líderes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 border border-gray-100 hover:border-[#5e2750]/20">
                <div className="bg-[#5e2750]/5 rounded-lg w-full h-48 mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5e2750]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#5e2750] transition-colors text-gray-800">
                  Búsqueda y Selección de Talento
                </h3>
                <p className="text-gray-600 mb-4">
                  Identificamos y evaluamos a los mejores candidatos para tu empresa.
                </p>
                <Link href="#" className="inline-flex items-center text-[#5e2750] font-medium hover:text-[#4e2042]">
                  Saber más <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Service 2 */}
              <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 border border-gray-100 hover:border-[#5e2750]/20">
                <div className="bg-[#5e2750]/5 rounded-lg w-full h-48 mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5e2750]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#5e2750] transition-colors text-gray-800">
                  Reclutamiento Estratégico
                </h3>
                <p className="text-gray-600 mb-4">
                  Desarrollamos estrategias personalizadas para atraer al talento adecuado.
                </p>
                <Link href="#" className="inline-flex items-center text-[#5e2750] font-medium hover:text-[#4e2042]">
                  Saber más <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Service 3 */}
              <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 border border-gray-100 hover:border-[#5e2750]/20">
                <div className="bg-[#5e2750]/5 rounded-lg w-full h-48 mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553877522-43269d4ea984')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5e2750]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#5e2750] transition-colors text-gray-800">
                  Evaluación de Competencias
                </h3>
                <p className="text-gray-600 mb-4">
                  Analizamos habilidades técnicas y blandas para garantizar el mejor match.
                </p>
                <Link href="#" className="inline-flex items-center text-[#5e2750] font-medium hover:text-[#4e2042]">
                  Saber más <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="flex justify-end mt-12">
              <Link href="#" className="inline-flex items-center text-[#5e2750] font-medium hover:text-[#4e2042]">
                Ver todos los servicios <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 bg-[#eef8f7]">
          <div className="container mx-auto">
            <div className="flex flex-col items-center mb-16">
              <div className="inline-block px-3 py-1 bg-[#00b8a9]/10 text-[#00b8a9] rounded-full text-sm font-medium mb-4">
                INDUSTRIAS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
                INDUSTRIAS EN LAS QUE NOS ENFOCAMOS
              </h2>
              <div className="w-20 h-1 bg-[#5e2750] mb-6"></div>
              <p className="text-gray-600 text-center max-w-2xl">
                Especializados en sectores clave con conocimiento profundo de cada industria.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Industry 1 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm group hover:shadow-md transition-all border border-gray-100 hover:border-[#00b8a9]/30">
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"></div>
                  <div className="absolute top-4 left-4 bg-[#00b8a9] text-white text-xs font-bold uppercase py-1 px-2 rounded-full">
                    Nuevo
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2e1226]/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">Tecnología y Startups</h3>
                    <p className="text-gray-200 text-sm">Soluciones para empresas innovadoras</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    Conectamos talento especializado con empresas tecnológicas y startups en crecimiento.
                  </p>
                  <div className="flex flex-col space-y-2">
                    <button className="bg-[#5e2750] text-white px-4 py-2.5 rounded-full text-sm font-medium w-full hover:bg-[#4e2042] transition-colors">
                      Encuentra Mayor Talento
                    </button>
                    <button className="bg-[#00b8a9] text-white px-4 py-2.5 rounded-full text-sm font-medium w-full hover:bg-[#009b8f] transition-colors">
                      Postulá tu CV
                    </button>
                  </div>
                </div>
              </div>

              {/* Industry 2 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm group hover:shadow-md transition-all border border-gray-100 hover:border-[#00b8a9]/30">
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2e1226]/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">Finanzas y Banca</h3>
                    <p className="text-gray-200 text-sm">Expertos en el sector financiero</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    Reclutamos profesionales especializados para instituciones financieras y bancarias.
                  </p>
                  <div className="flex flex-col space-y-2">
                    <button className="bg-[#5e2750] text-white px-4 py-2.5 rounded-full text-sm font-medium w-full hover:bg-[#4e2042] transition-colors">
                      Encuentra Mayor Talento
                    </button>
                    <button className="bg-[#00b8a9] text-white px-4 py-2.5 rounded-full text-sm font-medium w-full hover:bg-[#009b8f] transition-colors">
                      Postulá tu CV
                    </button>
                  </div>
                </div>
              </div>

              {/* Industry 3 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm group hover:shadow-md transition-all border border-gray-100 hover:border-[#00b8a9]/30">
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2e1226]/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">Retail y Consumo Masivo</h3>
                    <p className="text-gray-200 text-sm">Talento para el sector comercial</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    Seleccionamos perfiles especializados para empresas de retail y consumo masivo.
                  </p>
                  <div className="flex flex-col space-y-2">
                    <button className="bg-[#5e2750] text-white px-4 py-2.5 rounded-full text-sm font-medium w-full hover:bg-[#4e2042] transition-colors">
                      Encuentra Mayor Talento
                    </button>
                    <button className="bg-[#00b8a9] text-white px-4 py-2.5 rounded-full text-sm font-medium w-full hover:bg-[#009b8f] transition-colors">
                      Postulá tu CV
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-12">
              <Link href="#" className="inline-flex items-center text-[#5e2750] font-medium hover:text-[#4e2042]">
                Ver todas las industrias <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-[#5e2750]/10 to-[#5e2750]/5">
          <div className="container mx-auto">
            <div className="flex flex-col items-center mb-16">
              <div className="inline-block px-3 py-1 bg-[#5e2750]/10 text-[#5e2750] rounded-full text-sm font-medium mb-4">
                ¿POR QUÉ NOSOTROS?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">¿POR QUÉ CONECSI?</h2>
              <div className="w-20 h-1 bg-[#00b8a9] mb-6"></div>
              <p className="text-gray-600 text-center max-w-2xl">
                No se trata solo de contratar. Se trata de encontrar talento que transforme tu negocio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Reason 1 */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-[#5e2750]/20 text-center group">
                <div className="bg-[#5e2750]/10 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#5e2750]/20 transition-colors">
                  <Search className="h-10 w-10 text-[#5e2750]" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">Algoritmos Avanzados</h3>
                <p className="text-gray-600">
                  Algoritmos avanzados y equipos de expertos que matchen tu negocio al mejor talento.
                </p>
              </div>

              {/* Reason 2 */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-[#5e2750]/20 text-center group">
                <div className="bg-[#00b8a9]/10 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#00b8a9]/20 transition-colors">
                  <BarChart2 className="h-10 w-10 text-[#00b8a9]" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">Experiencia Comprobada</h3>
                <p className="text-gray-600">Más de 2 años conectando empresas con talento de forma exitosa.</p>
              </div>

              {/* Reason 3 */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-[#5e2750]/20 text-center group">
                <div className="bg-[#5e2750]/10 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#5e2750]/20 transition-colors">
                  <Users className="h-10 w-10 text-[#5e2750]" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">Red de Talento</h3>
                <p className="text-gray-600">
                  Tenemos una red de acceso a miles de perfiles calificados en diversas áreas.
                </p>
              </div>

              {/* Reason 4 */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-[#5e2750]/20 text-center group">
                <div className="bg-[#00b8a9]/10 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#00b8a9]/20 transition-colors">
                  <Globe className="h-10 w-10 text-[#00b8a9]" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">Soluciones Personalizadas</h3>
                <p className="text-gray-600">Adaptamos cada búsqueda a las necesidades específicas de tu empresa.</p>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <button className="bg-gradient-to-r from-[#5e2750] to-[#4e2042] text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                Agenda consulta gratuita
              </button>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <div className="flex flex-col items-center mb-16">
              <div className="inline-block px-3 py-1 bg-[#00b8a9]/10 text-[#00b8a9] rounded-full text-sm font-medium mb-4">
                TESTIMONIOS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">HISTORIAS DE ÉXITO</h2>
              <div className="w-20 h-1 bg-[#5e2750] mb-6"></div>
              <p className="text-gray-600 text-center max-w-2xl">
                ¿Querés ser nuestro próximo caso de éxito? Conoce las experiencias de quienes ya confiaron en nosotros.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Story 1 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-[#5e2750]/20">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 relative">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80')] bg-cover bg-center"></div>
                    <div className="relative md:hidden aspect-video"></div>
                    <div className="hidden md:block relative h-full"></div>
                  </div>
                  <div className="md:w-3/5 p-6 md:p-8">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 italic">
                      "Con CONECSI encontramos el talento emprendedor que nuestra empresa necesitaba. Su proceso de
                      selección fue impecable."
                    </p>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Earl Gray</h3>
                      <p className="text-[#5e2750]">CEO - PEPSI</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Story 2 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-[#5e2750]/20">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 relative">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80')] bg-cover bg-center"></div>
                    <div className="relative md:hidden aspect-video"></div>
                    <div className="hidden md:block relative h-full"></div>
                  </div>
                  <div className="md:w-3/5 p-6 md:p-8">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 italic">
                      "Con CONECSI encontré el trabajo ideal para mi experiencia. El proceso fue rápido y profesional en
                      todo momento."
                    </p>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Nelson Arrieta</h3>
                      <p className="text-[#00b8a9]">Developer - CONECSI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <Link href="#" className="text-[#5e2750] font-medium hover:text-[#4e2042] flex items-center">
                <span className="border-b border-[#5e2750]">Contáctanos</span>
              </Link>
              <Link href="#" className="inline-flex items-center text-[#5e2750] font-medium hover:text-[#4e2042]">
                Ver más historias <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-[#00b8a9] to-[#009b8f] text-white">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para encontrar el talento perfecto?</h2>
              <p className="text-xl mb-8 text-white">
                Conectamos empresas con profesionales que marcan la diferencia. Comienza hoy mismo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-[#00b8a9] px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:bg-gray-100 transition-all">
                  Encuentra Mayor Talento
                </button>
                <button className="bg-[#5e2750] text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:bg-[#4e2042] transition-all">
                  Postulá tu CV
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#2e1226] text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-6">Conecsi</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Conectamos talento con oportunidades. Somos expertos en reclutamiento y selección de personal para
                empresas líderes.
              </p>
              <div className="space-y-4">
                <p className="text-[#00b8a9] font-medium">Encuentra mayor talento para tu equipo</p>
                <p className="text-[#7fdfd6] font-medium">Encuentra un empleo que se alinee con tus metas</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-6">Newsletter</h4>
                <p className="text-gray-300 mb-4">Recibe nuestras novedades y ofertas de empleo</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Tu email"
                    className="bg-[#3e1934] text-white px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00b8a9] flex-grow"
                  />
                  <button className="bg-[#00b8a9] text-white px-6 py-3 rounded-full font-medium hover:bg-[#009b8f] transition-colors">
                    Suscribete
                  </button>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-6">Enlaces rápidos</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                      Ofertas de empleo
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                      Política de privacidad
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                      Términos y condiciones
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-[#3e1934] pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <Link href="/" className="text-2xl font-bold text-white inline-block">
                  Conecsi
                </Link>
              </div>
              <div className="flex space-x-6">
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
              </div>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-left mt-6">
              &copy; {new Date().getFullYear()} Conecsi. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

