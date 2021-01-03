import Code from 'components/Code/Code'
import React, { useEffect, useState} from 'react'

export interface propsModel {
  tagComponent?: string | null
  npm?: string | null
}

const DocVue = (props: propsModel) => {
  const [defineComponent, setdefineComponent] = useState<string>('')
  const [elementIgnore, setelementIgnore] = useState('')

  useEffect(() => {
    const npmName = props.npm ? props.npm : ''
    if(npmName) {
      let define = npmName
      const removeBusiness = define.split('/')
      if (removeBusiness.length >= 1)  {
        define = removeBusiness[removeBusiness.length - 1]
      }
      setelementIgnore(define)
      const lineBreak = define.split('-')
      if(lineBreak.length >= 1) {
        lineBreak.forEach( (word: string, index: number) => {
          const wordPascalCase = index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
          define = index === 0 ? wordPascalCase : define + wordPascalCase
        })
      }
      console.log(define)
      setdefineComponent(define + 'Define')
    }

  }, [props.npm])

  return (
    <div>
      <h1>Como usar Vue</h1>
<Code language="shell">
  {`npm i ${props.npm}`}
</Code>
      <h2>1) New Vue()</h2>
      <p>O Vuejs é inicializado através do <b>New Vue({})</b>, Geralmente você encontra em um arquivo chamado <b>main.js</b> que fica dentro da pasta <b>src</b> esse é o inicializador do Vue.js, iremos implementar nosso componente nele.</p>
      <hr/>
      <h2>importe</h2>
<Code language="javascript">
  {`import { applyPolyfills, defineCustomElements as ${defineComponent} } from '${props.npm}/loader';`}
</Code>
      <p>Antes do <b>{'New Vue({...})'}</b> adicione a linha abaixo.</p>
<Code language="javascript">
{`vue.config.ignoredElements = [/${elementIgnore}/];

applyPolyfills().then(() => {
  ${defineComponent}();
});`}
</Code>
      <blockquote>
      <b>vue.config.ignoredElements </b> é um objeto de custumização do próprio Vue. Ele serve para você dizer quais são os <i>web components</i> da sua aplicação, pois assim o Vue não ira se preocupar com o <i>import</i> ou declaração do seu componente
      </blockquote>
      <p>
        Você deve ficar atento se o seu projeto já não tem o <b>vue.config.ignoredElements</b>, se já existir você deve acrescentar o seu novo web componente nele. <br/>
        <a href="https://vuejs.org/v2/api/#ignoredElements" target="_blank" rel="noreferrer" >Mais sobre Vue ignoredElements</a>
      </p>
    <hr/>
    <h2>2) Tag html</h2>
<Code language="html">
{props.tagComponent}
</Code>
    </div>
  )
}

export default DocVue

