import orderBy from 'lodash/orderBy';
import { collections } from 'virtual:mdx-collection';

export const articles = orderBy(collections.articles, ['data.date'], ['desc']);
