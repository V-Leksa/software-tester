describe('Users API', () => {
    test('POST /posts', async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'user',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        expect(response.status).toBe(201);
        const data = await response.json();
        expect(data).toHaveProperty('id');
        expect(data.title).toBe('foo');
    });

    test('DELETE /comments/1', async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments/1', {
            method: 'DELETE',
        });
        expect(response.status).toBe(200);
    });

    test('PUT /posts/1', async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                title: 'updated title',
                body: 'updated body',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        expect(response.status).toBe(200);
        const data = await response.json();
        expect(data.title).toBe('updated title');
    });

    test('GET /comments/1', async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments/1');
        expect(response.status).toBe(200);
        const data = await response.json();
        expect(data).toHaveProperty('id', 1);
    });
});
