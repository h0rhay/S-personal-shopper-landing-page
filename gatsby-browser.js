import React from 'react';
import Layout from './src/components/Layout';
import { ThemeModeProvider } from './src/components/themeModeProvider';

export const wrapRootElement = ({ element }) => <ThemeModeProvider>{element}</ThemeModeProvider>;

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;
