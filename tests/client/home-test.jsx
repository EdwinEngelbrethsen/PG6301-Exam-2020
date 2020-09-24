const React = require('react');
const {mount} = require('enzyme');
const {MemoryRouter} = require('react-router-dom');

const {Game} = require('../../src/client/game');
const {stubFetch, flushPromises} = require('../mytest-utils');

/* Test taken from Lecture 07 https://github.com/arcuri82/web_development_and_api_design/blob/master/les07/server_client_together/tests/client/home-test.jsx */
test("Test failed fetch", async () => {
    stubFetch(500, {}, null);

    const driver = mount(
        <MemoryRouter initialEntries={["/game"]}>
            <Game/>
        </MemoryRouter>
    );

    await flushPromises();

    const html = driver.html();

    expect(html).toMatch("Error when connecting to server");
});