/**
 * A simple 404 error page.
 */

import React from 'react';
import Section from 'components/Section';

import './style.scss';

export default function Error404Page() {
  return (
    <Section type="dark">
      <h1 styleName="title">Error 404: Requested resource is not found.</h1>
    </Section>
  );
}

