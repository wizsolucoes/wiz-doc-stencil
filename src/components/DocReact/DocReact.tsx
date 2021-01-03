import Code from 'components/Code/Code'
import React, { useEffect, useState} from 'react'

export interface propsModel {
  tagComponent?: string | null
  npm?: string | null
}

const DocReact = (props: propsModel) => {
  const [defineComponent, setdefineComponent] = useState<string>('')

  useEffect(() => {
    const npmName = props.npm ? props.npm : ''
    if(npmName) {
      let define = npmName
      const removeBusiness = define.split('/')
      if (removeBusiness.length >= 1)  {
        define = removeBusiness[removeBusiness.length - 1]
      }
      const lineBreak = define.split('-')
      if(lineBreak.length >= 1) {
        lineBreak.forEach( (word: string, index: number) => {
          const wordPascalCase = index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
          define = index === 0 ? wordPascalCase : define + wordPascalCase
        })
      }
      setdefineComponent(define + 'Define')
    }

  }, [props.npm])

  return (
    <div className="DocReact">
      <h1>Como usar React</h1>
      <Code language="shell">
        {`npm i ${props.npm}`}
      </Code>
      <h2>1) React.Dom</h2>
      <p>Geralmente você encontra o React.Dom no seguinte caminho src/index.js ou src/index.ts, esse é o inicializador do React, iremos implementar o import do web-compontente nele.</p>
      <hr/>
<Code language="javascript">
  {`import { applyPolyfills, defineCustomElements as ${defineComponent} } from '${props.npm}/loader';`}
</Code>
      <p>depois que importou no <i>start</i> do react, no final do arquivo, você chama o que importou da seguinte maneira.</p>
      <p><small>Se já tiver declarado antes <b>applyPolyfills</b> por outro componente, não precisarar implementar de novo apenas adicione o {defineComponent} dentro do <b>applyPolyfills</b> já existente.</small></p>
<Code language="javascript">
{`applyPolyfills().then(() => {
    ${defineComponent}();
});`}
</Code>
      <hr/>
      <h2>2) Tag html</h2>
<Code language="html">
{props.tagComponent}
</Code>
    </div>
  )
}

export default DocReact
