import { css } from 'styled-components'

/**
 * Выставляет ширину в 100% для телефона и в 8.33% * n для десктопа
 * @param n
 * @returns { css }
 */
export const col = n => css`
  width: 100%;
  ${p => p.theme.mq.desktop} {
    width: ${p => p.theme.colSize[n] || '100%'}
  }
`

/**
 * Выставляет ширину в 100% для телефона и в 8.33% * n для планшета
 * @param n
 * @returns { css }
 */
export const col_s = n => css`
  width: 100%;
  ${p => p.theme.mq.tablet} {
    width: ${p => p.theme.colSize[n] || '100%'}
  }
`