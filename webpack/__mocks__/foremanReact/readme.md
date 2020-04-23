For testing components which have imported foreman-core components,
a mock file is required in this folder.

### Example: Mocking ForemanModal component
```js
//  __mocks__/foremanReact/components/ForemanModal/index.js
const ForemanModal = () => jest.fn();
ForemanModal.Header = () => jest.fn();
ForemanModal.Footer = () => jest.fn();
export default ForemanModal;
```
