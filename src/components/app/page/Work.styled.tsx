import styled from 'styled-components'

const Images = styled.div`
    display: flex;
    flex-wrap: wrap;
     & > img {
         position: relative;
         width: 100%;
         max-width: 310px;
         max-height: 310px;
         height: auto;
         padding: 20px
     }
`

export { Images }
