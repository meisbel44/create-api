import Link from 'next/link';
import Tabla from '@/components/tabla';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home({ users }) {
    return (
      <div className='Cabecera'>
        <h2>Listado de usuarios</h2>
        <hr />
        <Tabla />
        <hr />
        <Link href="/form_user">
          <button className='button ghost'><i className="fas fa-check-circle"></i>Adicionar Usuario</button>
        </Link>
      </div>
    );
  }