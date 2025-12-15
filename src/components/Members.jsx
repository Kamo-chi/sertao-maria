import members from '../data/members'
import Member from './Member'

export default function Members({ bgClass = '', textClass = '' }) {
    return (
        <section id="personagens" className={`${bgClass} py-12 ${textClass}`}>
          <div className="mx-auto px-6 max-w-screen-2xl">
            <h2 className="text-3xl font-bold mb-6">Membros</h2>
            <div className="flex flex-col gap-6">
              {members.map((m) => (
                <Member key={m.id} {...m} />
              ))}
            </div>
          </div>
        </section>
    )
}