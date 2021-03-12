import { Selector } from 'testcafe';

fixture `Counter`
    .page `http://localhost:3000`;

test('increment', async t => {
    await t
        .expect(Selector('#root p').withText('Counter 0').innerText).contains("Counter 0")
        .click(Selector('#root button').withText('increment'))
        .expect(Selector('#root p').withText('Counter 1').innerText).contains("Counter 1");
});