// https://medium.com/@dandobusiness/setting-up-a-react-typescript-storybook-project-5e4e9f540568
import { configure } from '@storybook/react';
const req = require.context('../src/stories', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}
configure(loadStories, module);