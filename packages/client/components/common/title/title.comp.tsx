import { TitleStyled } from './title.styled'

export const Title = () => {
  const title =
    'error: An unexpected error occured: "https://registry.yarnpkg.com/v1.22.10: Not found".'
  return (
    <TitleStyled>
      How to fix:
      <div>{title}</div>
      <pre
        style={{
          fontWeight: 400,
          fontSize: 15,
          border: '1px solid white',
          padding: 10,
        }}
      >
        Source: yarn install [package]
      </pre>
    </TitleStyled>
  )
}
