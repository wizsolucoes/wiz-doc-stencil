import React from 'react'

export interface propsModel {
  title?: string
}

const DocReact = (props: propsModel) => {
  return (
    <div className="DocReact">
      <h1>Como usar React</h1>
      <pre>
        <code>
        npm i @wizsolucoes/wiz-powerbi
        </code>
      </pre>
      <h2>React.Dom</h2>
      <p>Geralmente você encontra o React.Dom no seguinte caminho src/index.js ou src/index.ts, esse é o inicializador do React, iremos implementar nosso componente nele.</p>
      <hr/>
      <pre>
        <code>
          {`import { applyPolyfills, defineCustomElements as wizPowerbiDefine } from '@wizsolucoes/wiz-powerbi/loader';`}
        </code>
      </pre>
      <p>no final do arquivo src/index.js você chama o que importou da seguinte maneira.</p>
      <pre>
        <code>
          {`
            applyPolyfills().then(() => {
              wizPowerbiDefine();
            });
          `}
        </code>
      </pre>
      <h3>Tag html</h3>
      <pre>
        <code>
          {`
            <wiz-powerbi
            id-pbi={state.id}
            embed-url={state.embedUrl}
            token={state.token}
            >
            </wiz-powerbi>
          `}
        </code>
      </pre>
      <p>Você também pode olhar na documentação do Stenciljs Stencil documentação React</p>
    </div>
  )
}

export default DocReact
