import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button from "../atoms/Button";

storiesOf("Button", module)
  .add("with text", () => (
    <Button>Hello !</Button>
  ));