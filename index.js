let count = 0;

export default {
  async fetch(request, env, ctx) {
    if (request.method === 'GET') {
      return new Response(JSON.stringify({ count }), {
        headers: { 'Content-Type': 'application/json' }
      });
    } else if (request.method === 'POST') {
      count++;
      return new Response(JSON.stringify({ count }), {
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      return new Response('Method Not Allowed', { status: 405 });
    }
  }
}
