import React, { useState} from 'react'
import { useForm } from "react-hook-form";

import './Generator-page.scss'

const GeneratorPage = () => {
  const { register, handleSubmit } = useForm<{tag: string, npm: string}>();
  const [pathLink, setpathLink] = useState<null | string>(null)
  const host = window.location.host
  const onSubmit = (data: any) => {
    setpathLink(`npm=${data.npm}&tag=${encodeURIComponent(data.tag)}`)
  }
  return (
    <div className="GeneratorPage flex flex-col align-middle items-center">
      <div className="w-full max-w-xl">
      <h2>Caminho view</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl m-xs p-xs bg-white rounded shadow-xl">
        <label htmlFor="npm" className="block text-sm text-gray-700">NPM label</label>
        <input required name="npm" className="w-full px-xs py-xs text-gray-700 bg-gray-200 rounded mb-sm" id="npm" defaultValue="@wizsolucoes/" ref={register} />
        <div>
        <label htmlFor="tag" className="block text-sm text-gray-700">Tag Component</label>
        <textarea required className="w-full px-xs py-xs text-gray-700 bg-gray-200 rounded mb-sm" name="tag" ref={register} id="tag-component" cols={30} rows={10}></textarea>
        </div>
        <input type="submit" />
      </form>
      </div>
      {pathLink &&
      <div className="w-full bg-white rounded shadow-xl mt-sm mx-88 p-md">
        {['react', 'angular', 'vue'].map( (item: string, index: number) => {
        return <div key={index}>
            <h3>{item}</h3>
            <input type="text" className="w-full px-xs py-xs text-gray-700 bg-gray-200 rounded mb-sm" value={host + `?framework=${item}&` + pathLink}/>
            </div>
        } )}
      </div>
      }
    </div>
  )
}

export default GeneratorPage
