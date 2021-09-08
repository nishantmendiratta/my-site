import React from 'react';
import { getAllArticles, SHORT_STORIES_PATH, Frontmatter } from 'utlis/mdx';
import Link from 'components/link';
import { List, ListItem } from '@chakra-ui/react';

import PostLayout from 'components/post-layout/post-layout';

export default function ShortStories({posts}: any) {
  return (
    <PostLayout>
    <List p={10}>
    {posts.map((post, index) => (
      <li key={index}>
        <Link href={`posts/${post.slug}`} text={`${post.frontmatter.title}`} size={["xs", "sm", "md"]} uppercase/>
      </li>
    ))}
  </List>
  </PostLayout>
  );
}

export async function getStaticProps() {
  
  const posts = getAllArticles(SHORT_STORIES_PATH)

  return {
    props: {
      posts
    },
  };
}