import React from 'react'

export const LoadingPage = ()  => {
  return (
    <div>
      Carregando aguarde...
    </div>
  )
}
export const Page404 = ()  => {
  return (
    <div>
      Não foi possível achar essa página
    </div>
  )
}

export const PageNotParams = () => {
  return (
    <div className="page-loading">
    <div className="lds-roller">
      <svg viewBox="0 0 295.996 295.996"><path fill="#ffce00" d="M270.996 123.998a140.21 140.21 0 0 0-3.907-32.9c-7.269-15.152-17.35-28.708-29.558-39.996-22.391-13.376-48.766-20.666-76.771-19.644C83.492 34.274 23.139 99.196 25.955 176.463a140.221 140.221 0 0 0 5.087 32.673 132.688 132.688 0 0 0 23.934 32.42c21.892 14.189 47.99 22.44 76.023 22.44 77.317 0 139.997-62.68 139.997-139.998zm-73.33-25c8.836 0 16 7.164 16 16s-7.164 16-16 16-16-7.164-16-16 7.164-16 16-16zm-99 0c8.836 0 16 7.164 16 16s-7.164 16-16 16-16-7.164-16-16 7.164-16 16-16zM87.959 215.396l-12.633-9.82c21.441-27.579 57.392-40.777 91.587-33.631 21.262 4.447 40.353 16.391 53.756 33.631l-12.631 9.82c-11.078-14.249-26.847-24.118-44.4-27.789-28.256-5.91-57.963 5-75.679 27.789z" /><path fill="#ffb100" d="M267.089 91.098a140.216 140.216 0 0 1 3.907 32.9c0 77.318-62.68 139.998-139.998 139.998-28.032 0-54.131-8.251-76.023-22.44 23.88 23.744 56.766 38.44 93.023 38.44 72.784 0 131.998-59.214 131.998-131.998 0-20.362-4.638-39.661-12.907-56.9z" /><path fill="#ffe454" d="M160.76 31.457c28.006-1.021 54.381 6.268 76.771 19.644C213.985 29.328 182.521 16 147.998 16 75.214 16 16 75.214 16 147.998c0 22.049 5.442 42.849 15.042 61.138a140.221 140.221 0 0 1-5.087-32.673C23.139 99.196 83.492 34.274 160.76 31.457z" /><path d="M147.998 0C66.392 0 0 66.392 0 147.998s66.392 147.998 147.998 147.998 147.998-66.392 147.998-147.998S229.604 0 147.998 0zm0 279.996c-36.257 0-69.143-14.696-93.023-38.44a132.713 132.713 0 0 1-23.934-32.42C21.442 190.847 16 170.047 16 147.998 16 75.214 75.214 16 147.998 16c34.523 0 65.987 13.328 89.533 35.102 12.208 11.288 22.289 24.844 29.558 39.996 8.27 17.239 12.907 36.538 12.907 56.9 0 72.784-59.214 131.998-131.998 131.998z" /><path d="M163.638 187.607c17.554 3.671 33.322 13.54 44.4 27.789l12.631-9.82c-13.402-17.24-32.494-29.184-53.756-33.631-34.195-7.146-70.146 6.052-91.587 33.631l12.633 9.82c17.716-22.789 47.423-33.699 75.679-27.789z" /><circle cx="98.666" cy="114.998" r={16} /><circle cx="197.666" cy="114.998" r={16} /></svg>
    </div>
    <div>
      <h3>Atenção! </h3>
      <h4>Não foi possível carregar os dados, <br /> <a href="/#/generator"><strong>clique aqui</strong> </a> para iniciar o processo novamente.</h4>
    </div>
  </div>
  )
}