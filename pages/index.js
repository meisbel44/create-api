import Link from 'next/link';
import Tabla from '@/components/tabla';

export default function Home({ users }) {
    return (
      <div>
        <h2>Listado de usuarios</h2>
        <hr />
        <Tabla />
        <hr />
        <Link href="/form_user">
          <button>Adicionar Usuario</button>
        </Link>
      </div>
    );
  }