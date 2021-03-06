## What is unit testing?

Unit testing takes care of a single unit of code at a time; the smaller it is, the easier it can be tested. To a certain extent you want to limit the dependencies, integration or framework specifics in them. They comprise most of the testing code (if not all) of normal projects and are usually tested automatically in a CI pipeline.

### What are other types of testing?

#### Integration tests

Integration tests take care of testing communication with a database, file system, service, library dependency or even another of your own modules. Their setup is usually slower because it requires setting up some kind of testing environment.

#### Functional tests

Functional tests make sure that the app is behaving correctly from the user's point of view.

## Why should I invest my time in unit testing?

The habit of making unit tests isn't just about testing the component's behaviour.

1. _Improve architecture:_ When you start building a component while thinking about the unit tests it'll need, it will help to structure the code better and achieve a better separation of responsibilities. If the component looks like it's going to need a lot of test cases to fully test or if the test implementation is getting too complicated, it means that the component is too large or complex and you should split up its responsibilities and test them separately.
2. _Define functionality before coding:_ What should happen if a function's parameter is null? What should happen if the parameter's type is wrong? You can use a separate test for each possible case, pass it the wrong/correct parameter and assert if it was what you were expecting.
3. _Stop worrying so much and wasting your time:_ Be confident that the fix you just made fixes the bug and nothing else is affected. Thorough unit tests save time because they help to discover potential issues before deployment. A good practice when fixing bugs is to add a test that makes sure that the bug won't happen again.

## Further reading

1. [Jasmine vs Jest vs Mocha](https://gist.github.com/pakbaz/df45b7a85db1de5d14af5d54c3fe973a)
2. [Jest docs](https://jestjs.io/docs/en/getting-started)
3. [React-scripts test](https://create-react-app.dev/docs/running-tests/#option-2-react-testing-library)
4. [Debugging tests in VSCode](https://create-react-app.dev/docs/debugging-tests#debugging-tests-in-visual-studio-code)
