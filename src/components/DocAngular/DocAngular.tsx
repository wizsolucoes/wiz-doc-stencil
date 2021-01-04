import Code from 'components/Code/Code'
import React, { useEffect, useState} from 'react'

export interface propsModel {
  tagComponent?: string | null
  npm?: string | null
}

const DocAngular = (props: propsModel) => {
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
      <h1>Como usar Angular</h1>
      <Code language="shell">
        {`npm i ${props.npm}`}
      </Code>
      <h2>1) Modulo</h2>
      <p>O Angular usa os arquivos com o final <b>.module.ts</b> para adicionar components, rotas, páginas e outros.</p>
      <p>Abra o modulo que seu componente sera implementado.</p>
      <hr/>
      <h2>importe</h2>
<Code language="javascript">
  {`import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';`}
</Code>
      <p>Adicione no final do @NgModule</p>
<Code language="javascript">
{`@NgModule({
  ...
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
`}
</Code>
    <p><small>É <b>CUSTOM_ELEMENTS_SCHEMA</b> necessário incluir em qualquer módulo que use elementos personalizados.</small></p>
    <hr/>
    <h2>2) main.ts</h2>
<Code language="javascript">
  {`import { defineCustomElements as ${defineComponent} } from '${props.npm}/loader';`}
</Code>
    <p>no final do arquivo main.ts você chama o que importou</p>
    <Code language="javascript">
      {`${defineComponent}()`}
    </Code>
    <hr/>
    <h2>3) Tag html</h2>
<Code language="html">
{props.tagComponent}
</Code>
    </div>
  )
}

export default DocAngular
