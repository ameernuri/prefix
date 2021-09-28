import { TitleStyled } from './title.styled'

export const Title = () => {
  return (
    <TitleStyled>
      How to fix:
      <div>
        <q>
          error: An unexpected error occured:
          "https://registry.yarnpkg.com/v1.22.10: Not found".
        </q>
      </div>
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
