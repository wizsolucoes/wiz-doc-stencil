import Code from 'components/Code/Code';
import { PATH_DEFAULT } from 'config';
import React, { useState} from 'react'
import { useForm } from "react-hook-form";

const GeneratorPage = () => {
  const { register, handleSubmit } = useForm<{tag: string, npm: string}>();
  const [pathLink, setpathLink] = useState<null | string>(null)

  const onSubmit = (data: any) => {
    setpathLink(`npm=${data.npm}&tag=${encodeURIComponent(data.tag)}`)
  }

  const linkGenerator = (framework: string) => {
    return PATH_DEFAULT + `/?framework=${framework}&` + pathLink
  }

  return (
    <div className="GeneratorPage ">
      <div className="">
      <h1 className="text-md text-gray-900">Preencha os campos abaixo</h1>
      <p>Gerador para criar um mini tutorial de como inicializar o seu componente stenciljs em <i>React, Vue e Angular</i> </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="npm" className="block text-sm text-gray-700 mt-md">NPM</label>
        <input required name="npm" className="w-full px-xs py-xs text-gray-700 bg-gray-200 rounded mb-sm" id="npm" placeholder="examplo: @wizsolucoes/wiz-alert"  ref={register} />
        <div>
        <label htmlFor="tag" className="block text-sm text-gray-700">Tag Component</label>
        <textarea required className="w-full px-xs py-xs text-gray-700 bg-gray-200 rounded mb-sm" name="tag" ref={register} id="tag-component" cols={30} rows={10}></textarea>
        </div>
        <button type="submit" className="py-xs px-md bg-primary-500 rounded-default inline-block text-white">
          Gerar
        </button>
      </form>
      </div>
      {pathLink &&
      <>
        <div className="w-full bg-secondary-100 mt-md rounded shadow-xl  p-md">
          <h2 className="text-md font-bold mb-md">Links gerados</h2>
          {['react', 'angular', 'vue'].map( (item: string, index: number) => {
          return <div key={index}>
              <h3>{item}</h3>
              <input type="text" className="w-full px-xs py-xs text-gray-700 bg-gray-200 rounded mb-sm" value={linkGenerator(item)}/>
              </div>
          } )}
        </div>
        <div className="w-full bg-secondary-100 mt-md rounded shadow-xl  p-md">
          <h2 className="text-md font-bold mb-md">Adicione no seu readme.md</h2>
          <Code language="Markup">
{`|Frameworks| Link|
|--|--|
|Angular| [Link](${linkGenerator('angular')})|
|React | [Link](${linkGenerator('react')})|
|Vue | [Link](${linkGenerator('vue')})|
[outros](https://stenciljs.com/docs/overview)
`}
          </Code>
        </div>
      </>
      }
    </div>
  )
}

export default GeneratorPage
