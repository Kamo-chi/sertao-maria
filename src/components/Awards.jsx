export default function Awards({ bgClass = '', textClass = '' }) {
    return (
        <section id="premiacoes" className={`${bgClass} py-20 ${textClass}`}>
          <div className="mx-auto px-6 max-w-screen-2xl">
            <h2 className="text-3xl font-bold mb-6">Premiações</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            </div>
          </div>
        </section>
    )
}