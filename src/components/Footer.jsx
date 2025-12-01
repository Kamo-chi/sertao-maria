export default function Footer(){
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="container mx-auto px-6 text-center">
        <p>© {new Date().getFullYear()} — Empresa Exemplo. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
