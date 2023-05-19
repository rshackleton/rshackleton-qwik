import { component$ } from '@builder.io/qwik';
import { DocumentHead, server$ } from '@builder.io/qwik-city';
import { Button } from 'ui';

const logOnServer = server$((message) => {
  console.log(message);
});

export default component$(() => {
  return (
    <div>
      <h1>Test</h1>
      <Button
        onClick$={async () => {
          await logOnServer('test server');
          console.log('test client');
        }}
      >
        Test
      </Button>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
