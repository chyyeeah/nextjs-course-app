/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link';

const Notes = () => {
  const dummyNotes = new Array(10).fill(0).map((e, i) => {
    return { id: i, title: i };
  });

  return (
    <div sx={{ variant: 'containers.page' }}>
      <h1>My Notes</h1>

      <div sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        {dummyNotes.map(note => (
          <div sx={{ width: '33%', p: 2 }}>
            <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
              <a sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                <div sx={{ variant: 'containers.card', }}>
                  <strong>{note.title}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;