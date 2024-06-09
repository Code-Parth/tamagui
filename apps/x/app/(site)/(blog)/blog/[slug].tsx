import { getAllFrontmatter, getCompilationExamples, getMDXBySlug } from '@tamagui/mdx'
import { getMDXComponent } from 'mdx-bundler/client'
import React from 'react'
import type { LoaderProps } from 'vxs'
import { useLoader } from 'vxs'

import { HeadInfo } from '~/components/HeadInfo'
import { TamaguiExamples } from '~/components/TamaguiExamples'
import { BlogSlugPage } from '~/features/site/blog/BlogSlugPage'
import { getOgUrl } from '~/features/site/getOgUrl'

export async function generateStaticParams() {
  const frontmatters = getAllFrontmatter('blog')
  return frontmatters.map(({ slug }) => ({
    slug: slug.replace('blog/', ''),
  }))
}

export async function loader(props: LoaderProps) {
  const { slug } = props.params
  const { frontmatter, code } = await getMDXBySlug('data/blog', slug)
  const relatedPosts = frontmatter.relatedIds
    ? await Promise.all(
        frontmatter.relatedIds.map(async (id) => {
          const { frontmatter } = await getMDXBySlug('data/blog', id)
          return frontmatter
        })
      )
    : null

  return {
    frontmatter,
    code,
    relatedPosts,
    examples: await getCompilationExamples(),
  }
}

export default function BlogSlug() {
  const data = useLoader(loader)
  const Component = React.useMemo(() => getMDXComponent(data.code), [data.code])

  return (
    <>
      <HeadInfo
        {...data.frontmatter}
        title={`${data.frontmatter.title} — Tamagui`}
        description={data.frontmatter.description}
        openGraph={{
          images: [
            {
              url:
                data.frontmatter.image ??
                getOgUrl('default', {
                  title: data.frontmatter.title,
                  description: data.frontmatter.description ?? '',
                  category: 'Blog',
                }),
              width: 1200,
              height: 630,
            },
          ],
        }}
      />

      <TamaguiExamples.Provider value={data.examples}>
        <BlogSlugPage Component={Component} {...data} />
      </TamaguiExamples.Provider>
    </>
  )
}
