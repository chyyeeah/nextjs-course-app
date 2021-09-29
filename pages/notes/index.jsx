import React from 'react';
import Link from 'next/link';

const Notes = () => {
  const dummyNotes = new Array(10).fill(0).map((e, i) => {
    return { id: i, title: i };
  });

  return (
    <div>
      <h1>Notes</h1>
      {
        dummyNotes.map(({ id, title }) => {
          return (
            <div>
              <Link href='/notes/[id]' as={`/notes/${id}`}>
                <a>Note {title}</a>
              </Link>
            </div>
          );
        })
      }
    </div>
  );
};

export default Notes;