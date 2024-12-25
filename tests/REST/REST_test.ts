Feature('REST');


Scenario('restTest', ({ I }) => {
    I.sendGetRequest('/qotd/');
    I.seeResponseCodeIsSuccessful();
});